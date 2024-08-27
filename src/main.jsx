import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { TodoProvider } from './context/TodosContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  <AuthProvider>
    <TodoProvider>
      <ThemeProvider>
        <BrowserRouter >
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </TodoProvider>
  </AuthProvider>
  // </StrictMode>
)
