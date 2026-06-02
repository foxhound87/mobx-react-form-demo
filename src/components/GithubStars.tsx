import React from 'react';
import { Star } from 'lucide-react';

const format = (n) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace('.0', '')}k` : `${n}`;

const LS_KEY = 'mrf-github-stars';

export default () => {
  const [stars, setStars] = React.useState(() => {
    try { return parseInt(localStorage.getItem(LS_KEY), 10) || null; }
    catch { return null; }
  });

  React.useEffect(() => {
    fetch('https://api.github.com/repos/foxhound87/mobx-react-form')
      .then((r) => r.json())
      .then((d) => {
        if (d.stargazers_count) {
          setStars(d.stargazers_count);
          try { localStorage.setItem(LS_KEY, d.stargazers_count); } catch {}
        }
      })
      .catch(() => {});
  }, []);

  if (!stars) return null;

  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-surface-500">
      <Star size={12} className="text-amber-400" fill="currentColor" />
      {format(stars)}
    </span>
  );
};
