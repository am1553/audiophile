import React from 'react';
import Header from './components/ui/Header';
import MenuProvider from './context/MenuContext';
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <MenuProvider>
        <Header />
      </MenuProvider>
      <Home />
    </div>
  );
}

export default App;
