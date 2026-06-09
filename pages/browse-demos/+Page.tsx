import React from 'react';
import BrowseDemos from '../../src/components/BrowseDemos';

export default function Page() {
  return <BrowseDemos onNavigate={(key) => { history.pushState({}, '', '/form/' + key); dispatchEvent(new CustomEvent('app-navigate')); }} />;
}
