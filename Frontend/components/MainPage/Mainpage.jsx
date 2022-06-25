import React from 'react'
import Intro from './Body/Intro/Intro'
import About from './Body/About/About'
import Testimonials from './Body/Testimonials/Testimonials'
import ProductList from './Body/ProductList/ProductList'
import Goto from './Body/Goto/Goto'

const Mainpage = () => {
  return (
    <>
    <Intro />
    <About />
    <Testimonials />
    <ProductList/>
    <Goto />
    </>
  )
}

export default Mainpage