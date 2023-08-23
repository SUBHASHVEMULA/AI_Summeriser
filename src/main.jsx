import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {store} from  './services/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider thats wrappin the app contains the store
     that contains articleApi */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
