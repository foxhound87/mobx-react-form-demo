import React from 'react';
import Welcome from '../src/components/Welcome';

export default function Page() {
  return <Welcome onNavigate={() => { window.history.pushState({}, '', '/browse-demos'); window.dispatchEvent(new CustomEvent('app-navigate')); }} />;
}
