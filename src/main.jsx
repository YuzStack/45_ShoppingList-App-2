import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ShoppingList from './Components/ShoppingLIst';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingList />
  </StrictMode>
);
