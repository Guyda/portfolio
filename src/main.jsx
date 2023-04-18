import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/styles.scss'
import { ReactLenis } from '@studio-freight/react-lenis';

const options = {duration:1.5};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactLenis root options={{ ...options }}>
      <App />
    </ReactLenis>
  </React.StrictMode>
)
