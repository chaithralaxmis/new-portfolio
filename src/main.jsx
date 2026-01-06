import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Main.jsx executing');
try {
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} catch (error) {
  console.error('Error in main.jsx:', error);
}
