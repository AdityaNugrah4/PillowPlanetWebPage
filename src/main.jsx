import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const effectiveBaseUrl = import.meta.env.BASE_URL;
console.log('Effective BASE_URL for BrowserRouter:', effectiveBaseUrl); // to check

// Function to extract path from query parameter
const getPathFromQuery = () => {
  const params = new URLSearchParams(window.location.search);
  const path = params.get('p');
  if (path) {
    // Decode the path and restore ampersands
    return path.replace(/~and~/g, '&');
  }
  return null;
};

const initialPath = getPathFromQuery();

const RouterComponent = initialPath ? MemoryRouter : BrowserRouter;
const routerProps = initialPath
  ? { initialEntries: [initialPath] }
  : { basename: effectiveBaseUrl };

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterComponent {...routerProps}>
      {initialPath ? (
        // If use MemoryRouter, provide the App inside a Routes context that matches the initial path or ensure App handles this internally
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      ) : (
        <App />
      )}
    </RouterComponent>
  </StrictMode>,
)
