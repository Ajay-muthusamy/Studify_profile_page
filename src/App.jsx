import React from 'react'
import Header from './header/header'
import Banner2 from './main2/banner2'
import Lan from './languagelearn/lan'
import Morefeat from './morefeat/morefeat'
import Footer from './footer/footer'
const App = () => {
  return (
    <div>
      <Header />,
      <Banner2 />,
      <Lan />,
      <div className='bodycard'>
      <Morefeat date="JUNE 20" image="https://wallpapercave.com/wp/wp7718053.png" disc="React course from beginner to advanced ,led by renowned mentor, Sarah Thompson" proj="50+ project"/>,
      <Morefeat date="JUNE 30" image="https://wallpapercave.com/wp/wp5070716.jpg" disc=" Node.js course from beginner to advanced ,led by renowned mentor, Alex Martinez" proj="50+ project"/>,
      <Morefeat date="JULY 1" image="https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png" disc="Full Stack Complete guide from beginner to advanced ,led by renowned , Sarah" proj="100+ project"/>,
      <Footer />
      </div>,
    </div>
  )
  //Alex Martinez
}

export default App
