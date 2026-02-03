import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AddProduct from './pages/Admin/AddProduct.jsx'
import { CartProvider } from './context/CartContext.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path:'/',
        element: <Home/>,
      },
      {
        path: "/products",
        element: <ProductList/>
      },
      {
        path: "/products/:id",
        element: <ProductDetail/>
      },
      {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
          {
            path: '/admin/add-product',
            element: <AddProduct/>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
