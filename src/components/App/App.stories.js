import React from 'react';

import App from './App';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'App',
  component: App,
};

export function Empty() {
  return <App />;
}
