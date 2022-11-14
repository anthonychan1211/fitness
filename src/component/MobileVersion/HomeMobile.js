import React from 'react'
const HomeMobile = () => {
  return (
    <div>
         <div className='main-mobile'>
            <div className='top-container-mobile'>
              <h1 className='slogan-mobile'>Fit to Train.<br></br> Train to Fit.</h1>
        </div>
        
    </div>

    {/* About */}

    <div className='about-text-mobile'>
            <h1>Train for what you aim.</h1>
            <p>We can provide the most suitable training plan according to your needs. 
                By entering your body data, our algorithm will help you to calculate the 
                ideal numbers of weight, sets, and reps. </p>
            <img className='about-img-mobile' src='weightlifting.jpg'/>
            
                <br/>
                <br/>
                <p>
                We can even let you choose which
                body part to enphasize, whether inclining to powerlifting or body building.
                <br/>
                <br/>
                Join now for free!
            </p>
            <button className='sign-in'>Register</button>
    </div>
    
    
    </div>
  )
}

export default HomeMobile