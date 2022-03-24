import React from 'react' ;
import Announcement from '../components/Announcement' ;
import Navbar from '../components/Navbare' ;
import Slider from '../components/Slider' ;
import Categories from '../components/Categories' ;
import Products from '../components/Products' ;
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer' ;

function Home() {
 
  return (
    <div>
        
        <Navbar/>
        <br/>
        <Announcement/>
        <Slider/>
        <Categories  />
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home