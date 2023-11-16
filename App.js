import React,{useState} from 'react';
import MyNavbar from './Navbar';
import Info from './Info';
import AiHelper from './AiHelper';
import Cards from './AiHelperCards';
import Product from './Product';
import ProductSecond from './Product2';
import OurProduct from './OurProduct';
import RegistrationForm from './Registration';
import AutoScrollCarousel from "./AutoScrollCarousel";
import Footer from './Footer';
import Revievs from './Revievs';
 

function App() {
  return (
    <div  className="App">
       <MyNavbar />
      <Info />
      <AiHelper/>
      <Cards/>
      <OurProduct id='about'/>
      <Product />
      <ProductSecond/>
      <RegistrationForm />
      <Revievs id="reviews"/>
      <AutoScrollCarousel />  
      <Footer id="contact"/>
      </div>
  );
}

export default App; 