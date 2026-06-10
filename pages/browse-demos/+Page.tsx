import React from 'react';
import BrowseDemos from '../../src/components/BrowseDemos';

const BASE_PATH = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export default function Page() {
  return (
    <BrowseDemos
      onNavigate={(key) => {
        window.history.pushState({}, '', `${BASE_PATH}/form/${key}`);
        window.dispatchEvent(new CustomEvent('app-navigate'));
      }}
    />
  );
}
