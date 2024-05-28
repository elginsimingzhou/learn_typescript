import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart? <Cart />: <ProductList />

  const content = (
    //Fragments let you group a list of children without adding extra nodes to the DOM.
    <>
      <Header viewCart = {viewCart} setViewCart={setViewCart}  />
      {pageContent}
      <Footer viewCart={viewCart}/>
    </>
  )
  return content;
}

export default App;
