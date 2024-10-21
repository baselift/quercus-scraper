import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from './App/App';
import Error from './Error/Error'
import { tabs } from 'webextension-polyfill'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

async function onPopupLoad() {
  let queryOptions = { active: true, lastFocusedWindow: false };
  var [tab] = await tabs.query(queryOptions)
  if (tab.url?.startsWith("https://q.utoronto.ca/")) {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <Error />
      </React.StrictMode>
    )
  }
}

onPopupLoad();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
