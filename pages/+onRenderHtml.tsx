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

configure({ enforceActions: 'always' });

let renderCount = 0;

export default function onRenderHtml(pageContext) {
  const { Page, routeParams } = pageContext;
  const section = routeParams?.section;

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

  const title = section
    ? `${section} - MobX React Form Demo`
    : 'MobX React Form Demo';

  return escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>${title}</title>
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
