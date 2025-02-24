import { HeroUIProvider } from '@heroui/system';
import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element found');
}

ReactDom.createRoot(root).render(
  <React.StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </React.StrictMode>
);
