import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    const { worker } = await import('./mocks');

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start();
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});
