import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductPage from './pages/ProductPage.tsx'
import MainRoutes from './routes/MainRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App />
    <ProductPage/>
    <MainRoutes/>
    </BrowserRouter>
)
