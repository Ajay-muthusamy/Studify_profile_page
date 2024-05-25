import React from 'react'
import '../main.css'
import one from '../assets/1.png';
const header = () => {
  return (
    <div>
      <h1 className="main-container">
        <h1 className='text-center pt-5 text-white'>What’s in Studify </h1>
        <p className='text-center fs-6 text-white pt-2'>Empowering learners with accessible, flexible, and engaging online education.</p>
      </h1>
      <div className='search-container'>
        <div className='text'>
        <button>search</button>
        <h3 className='text-white'>Search and get related suggestions</h3>
        <p className='text-white'>Get suggestions in the search box related to your previous searches based on similar things others are looking for.</p>
        <ul className='text-white'>
            <li>Quickly open a new tab to explore more topics without leaving your current page.</li>
            <li>Click on the search box to reveal related suggestions instantly.</li>
            <li>Select any suggested topic to dive into search results and discover more.</li>
        </ul>
        </div>
        <div className='screenshot'>
            <img src={one} alt="" className='figure-img img-fluid rounded'/>
        </div>
      </div>
    </div>
  )
}

export default header;