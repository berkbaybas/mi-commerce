import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ProductList from './pages/Product/ProductList'
import ProductDetail from './pages/Product/ProductDetail'
import Cart from './pages/Cart'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
