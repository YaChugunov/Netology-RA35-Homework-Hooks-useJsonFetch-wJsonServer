import React from 'react';
import './App.css';

import { useJsonFetch } from './useJsonFetch';

function AppHook1({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h2>{url}</h2>
      <h3>{data && data.status}</h3>
      <h3>{isLoading && 'Is Loading1'}</h3>
      <h3>{hasError && 'Has Error1'}</h3>
    </div>
  );
}
function AppHook2({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h2>{url}</h2>
      <h3>{data && data.status}</h3>
      <h3>{isLoading && 'Is Loading2'}</h3>
      <h3>{hasError && 'Has Error2'}</h3>
    </div>
  );
}
function AppHook3({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h2>{url}</h2>
      <h3>{data && data.status}</h3>
      <h3>{isLoading && 'Is Loading3'}</h3>
      <h3>{hasError && 'Has Error3'}</h3>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <AppHook1 url={process.env.REACT_APP_DATA_URL} />
      <hr />
      <AppHook2 url={process.env.REACT_APP_ERROR_URL} />
      <hr />
      <AppHook3 url={process.env.REACT_APP_LOADING_URL} />
      <hr />
    </div>
  );
}
