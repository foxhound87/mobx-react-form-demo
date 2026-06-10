import React from 'react';
import Welcome from '../src/components/Welcome';

const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export default function Page() {
  return (
    <Welcome
      onNavigate={() => {
        window.history.pushState({}, '', `${BASE_PATH}/browse-demos`);
        window.dispatchEvent(new CustomEvent('app-navigate'));
      }}
    />
  );
}
