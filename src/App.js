import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import ProductList from './pages/Product/ProductList'
import ProductDetail from './pages/Product/ProductDetail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
