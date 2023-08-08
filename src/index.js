import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

export const Context = createContext(null);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <Context.Provider
  //   value={{
  //     app,
  //     auth,
  //     database,
  //   }}
  // >
  <App />
  // </Context.Provider>
  /* </React.StrictMode> */
);
