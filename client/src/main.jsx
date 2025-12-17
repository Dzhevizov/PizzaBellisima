import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './contexts/AuthContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </UserProvider>
)
