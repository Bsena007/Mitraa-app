import React from 'react'//rfce//cd mitraa-app//npm run dev
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work/Work';
import News from './components/News/News';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career'
import Footer from './components/Footer/Footer';
import Title from './components/Title/Title'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

const App = () =>  {
  return(
    <BrowserRouter>
    <div>
      <Navbar />
       
      <Routes>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/career' element={<Career />}></Route>
      </Routes> 
      <Footer />
    </div>
    </BrowserRouter>
  )










  // return (
  //   <div>
  //     <Navbar />
  //       <Work />
  //       <div className="container">
  //         <Title subTitle='Our Programs' title='What We Offers'/>
  //         <News />
  //         <About />
  //         <Title subTitle='Gallery' title='Campus Photos'/>
  //         <Campus />
  //         <Title subTitle='Testimonials' title='What Students Says'/>
  //         <Testimonial />
  //         <Title subTitle='Contact US' title='Get in Touch'/>
  //         <Contact />
  //       </div>
        
  //   </div>
  // )
}

export default App;
