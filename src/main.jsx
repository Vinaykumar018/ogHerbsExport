import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './setupJQuery'; // Import jQuery setup

import './index.css'
import { store } from './Model/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
