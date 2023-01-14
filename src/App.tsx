import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/ui/Header';
import ScrollToTop from './components/ui/ScrollToTop';
import CartProvider from './context/CartContext';
import MenuProvider from './context/MenuContext';
import Checkout from './pages/Checkout';
import Earphones from './pages/Earphones';
import ErrorPage from './pages/ErrorPage';
import Headphones from './pages/Headphones';
import Home from './pages/Home'
import Product from './pages/Product';
import Speakers from './pages/Speakers';


function App() {
  return (
    <Router >
      <div className="App bg-offwhite">
        <MenuProvider>
          <CartProvider>
            <Header />
          </CartProvider>
        </MenuProvider>
        <ScrollToTop>
          <Routes>
            <Route 
              path='/*' 
              element={<ErrorPage />}
            />
            <Route 
              path='/' 
              element={<Home />}
            />
            <Route 
              path='/headphones' 
              element={<Headphones />}
            />
            
            <Route path='/speakers' element={<Speakers />}/>
            <Route path='/earphones' element={<Earphones />}/>
            <Route path='/product/:category/:slug' element={<Product />}/>
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
