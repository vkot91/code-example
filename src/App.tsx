import React from 'react';

import { Posts } from 'pages/Posts';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__title">Blog</div>
      <Posts />
    </div>
  );
};
