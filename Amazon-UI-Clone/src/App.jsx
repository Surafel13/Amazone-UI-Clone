import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/bootstrap.css'
import './Style/App.css'

import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer';
import CaraouselEffect from './Component/CarouselEffect/CaraouselEffect';
import Card from './Component/Card/Card';
import LowerFooter from './Component/Footer/LowerFooter';
import ImageSlider from './Component/ImageSlider/ImageSlider';
import './Main.css'

function App() {
  

  return (
    <div style={{backgroundColor:'#E3E6E6'}}>
    <Header/>
    <CaraouselEffect />
    <Card />
    <ImageSlider />
    <Footer/>
    <LowerFooter />
    </div >
  )
}

export default App
