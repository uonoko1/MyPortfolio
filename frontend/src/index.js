import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Clickcontextprovider } from './state/ClickContext';

function ServiceWorkerRegister() {
  useEffect(() => {
    if ((process.env.REACT_APP_API_URL === "https://staging.daichisakai.net" || process.env.REACT_APP_API_URL === "https://daichisakai.net") && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(function (error) {
        console.log('Service Worker registration failed:', error);
      });
    }
  }, []);

  return null; // 何もレンダリングしない
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clickcontextprovider>
      <App />
      <ServiceWorkerRegister />
    </Clickcontextprovider>
  </React.StrictMode>
);
