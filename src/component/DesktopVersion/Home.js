import React from 'react'
import About from './About'

const Home = () => {
  return (
    <>
    <div className='main'>
        <div className='top-container'>
        <h1 className='slogan'>Fit to Train. Train to Fit.</h1>
        </div>
        
    </div>
    
    <div className='about-header-banner'>
        <h1 className='about-header'>Welcome to FitU</h1>
        <div className='parallelogram'></div>
        <div className='thin-bar'></div>
      </div>
{/* About */}

    <div className='about-container'>
        <div className='about-text'>
            <h1>Train for what you aim.</h1>
            <p>We can provide the most suitable training plan according to your needs. 
                By entering your body data, our algorithm will help you to calculate the 
                ideal numbers of weight, sets, and reps. 
                <br/>
                <br/>
                We can even let you choose which
                body part to enphasize, whether inclining to powerlifting or body building.
                <br/>
                <br/>
                Join now for free!
            </p>
            <button className='sign-in'>Register</button>
        </div>
        <div className='about-img'>
            <img src='weightlifting.jpg'></img>
            </div>
        </div>
        
    </>
  )
}

export default Home