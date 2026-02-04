// main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container)

// Optional: get user preference
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

if (userPrefersDark) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
