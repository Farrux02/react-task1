import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Main from './Components/Main';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = () => {
    axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/categories')
    .then(res => {
      setCategories(res.data)
    })
  }

  const getProducts = () => {
    axios.get('https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/products')
    .then(res => {
      setProducts(res.data)
    })
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, [])

  return (
    <>
      <Header categories={categories}/>
      <Main products={products}/>
    </>
  );
}

export default App;
