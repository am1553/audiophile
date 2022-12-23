import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/ui/Header';
import MenuProvider from './context/MenuContext';
import Earphones from './pages/Earphones';
import ErrorPage from './pages/ErrorPage';
import Headphones from './pages/Headphones';
import Home from './pages/Home'
import Speakers from './pages/Speakers';
function App() {
  return (
    <Router >
      <div className="App">
        <MenuProvider>
          <Header />
        </MenuProvider>
        <Routes>
          <Route path='/*' element={<ErrorPage />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/headphones' element={<Headphones />}/>
          <Route path='/speakers' element={<Speakers />}/>
          <Route path='/earphones' element={<Earphones />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
