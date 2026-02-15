import React from 'react';
import Home from './components/Container/Home/Home';
import Headder from './components/Pages/Headder';
import Footer from './components/Pages/Footer';
import { Routes, Route } from 'react-router-dom';
import ShopCard from './components/Container/shop/ShopCard';
import Data from './AllDemoData.json';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import PageNotFound from './components/Pages/PageNotFound';
import Product from './components/Container/Product/Product';
import Cart from './components/Container/Cart/Cart';
import CheckOut from './components/Container/Cart/ShippingAddress';

const App = () => {
  const { FeaturedProducts, LatestProducts, ShopProducts, BestSellerProducts } = Data;

  return (
    <div>
      <Headder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<ShopCard Products={ShopProducts} />} />
        <Route path="/featured" element={<ShopCard Products={FeaturedProducts} />} />
        <Route path="/latest" element={<ShopCard Products={LatestProducts} />} />
        <Route path="/bestseller" element={<ShopCard Products={BestSellerProducts} />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/product/:type/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
