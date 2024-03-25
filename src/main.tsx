// main.tsx or main.jsx
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './globals.css'
import React from 'react'

// @typescript-eslint/ban-ts-comment
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <App/>
    </NextUIProvider>
  </React.StrictMode>
)
