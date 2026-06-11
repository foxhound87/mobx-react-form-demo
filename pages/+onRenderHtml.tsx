import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { configure } from 'mobx';

import Nav from '../src/components/Nav';

import Lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';
Lang._set('en', en);

import { SSRProvider } from 'react-aria-components';

import "react-widgets/styles.css";
import "antd/dist/antd.css";
import '../src/style.css';

import {
  SITE_NAME,
  SITE_URL,
  SITE_AUTHOR,
  TWITTER_HANDLE,
  DEFAULT_OG_IMAGE,
  HOME_SEO,
  BROWSE_DEMOS_SEO,
  SEO_META,
  getCanonicalUrl,
} from '../src/forms/seo';

configure({ enforceActions: 'always' });

let renderCount = 0;

// JSON-LD hardening: a literal `</script>` inside a JSON string would
// break out of the <script type="application/ld+json"> tag. None of the
// current descriptions contain it, but we escape defensively so future
// edits to the SEO registry don't silently break structured data.
function safeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function onRenderHtml(pageContext) {
  const { Page, routeParams } = pageContext;
  // Vike sets `urlPathname` to the path of the current URL (e.g. `/`,
  // `/browse-demos`, `/form/login`). We use it to distinguish routes
  // that share the same render hook but need different SEO, since
  // `routeParams.section` is only populated for `/form/*`.
  const urlPathname = (pageContext && pageContext.urlPathname) || '/';
  const isBrowseDemos =
    urlPathname === '/browse-demos' || urlPathname === '/browse-demos/';
  const section = isBrowseDemos
    ? 'browse-demos'
    : (routeParams && routeParams.section) || null;

  renderCount++;

  const pageHtml = Page
    ? ReactDOMServer.renderToString(
        <SSRProvider>
          <div id="app-shell">
            <Nav menu={null} select={null} selected={null} />
            <main className="pt-14 md:pl-56">
              <div id="page-content" data-section={section || ''}>
                <Page routeParams={routeParams} />
              </div>
              <footer className="text-center py-6 text-xs text-surface-400 border-t border-surface-200 mt-12">
                Powered by{' '}
                <a
                  href="https://github.com/foxhound87/mobx-react-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-500 hover:text-brand-600 underline underline-offset-2"
                >
                  mobx-react-form
                </a>
              </footer>
            </main>
          </div>
        </SSRProvider>
      )
    : '';

  const seo =
    section === 'browse-demos'
      ? BROWSE_DEMOS_SEO
      : section && SEO_META[section]
        ? SEO_META[section]
        : HOME_SEO;
  const title = section ? `${seo.title} - ${SITE_NAME}` : seo.title;
  const description = seo.description;
  const keywords = seo.keywords;
  const canonical = getCanonicalUrl(section);
  const ogType = section ? 'article' : 'website';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': section ? 'WebPage' : 'WebSite',
    name: title,
    headline: title,
    description,
    url: canonical,
    inLanguage: 'en',
    author: {
      '@type': 'Person',
      name: SITE_AUTHOR,
      url: 'https://github.com/foxhound87',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    ...(section
      ? {
          mainEntity: {
            '@type': 'SoftwareApplication',
            name: 'mobx-react-form',
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'Any',
            url: 'https://github.com/foxhound87/mobx-react-form',
          },
        }
      : {
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/form/{search_term}`,
            'query-input': 'required name=search_term',
          },
        }),
  };

  // Note: `escapeInject` already HTML-escapes string interpolations, so
  // we must NOT pre-escape values in JS. Doing so would double-escape
  // them (`&` -> `&amp;` -> `&amp;amp;`) and corrupt the meta content
  // that crawlers and social cards read.
  return escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>${title}</title>

    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="${SITE_AUTHOR}">
    <meta name="theme-color" content="#0f172a">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <link rel="canonical" href="${canonical}">

    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="${SITE_NAME}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${DEFAULT_OG_IMAGE}">
    <meta property="og:image:alt" content="${title}">
    <meta property="og:locale" content="en_US">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="${TWITTER_HANDLE}">
    <meta name="twitter:creator" content="${TWITTER_HANDLE}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${DEFAULT_OG_IMAGE}">
    <meta name="twitter:image:alt" content="${title}">

    <script type="application/ld+json">${safeJsonLd(jsonLd)}</script>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" as="style">
  </head>
  <body>
    <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>`;
}
