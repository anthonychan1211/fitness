import React from 'react'
import '../../App.css'

const About = () => {
  return (
   <>
   <div className='about-header-img'>
    <img src='Training.jpg' />
   </div>

   <div className='about-header-banner'>
    <h1 className='about-header'>About Us</h1>
    <div className='parallelogram'></div>
    <div className='thin-bar'></div>
   </div>

   <div className='about-body'>
    <div className='about-body-text'>
    <p>
    <h1>How Do We Work?</h1>
      Exercise suits everyone. The purpose of different age groups, gender varys. 
      Research shows progressive overload exercise improves quality of life by increasing mobility, 
      strength and better joint condition etc.
      By filling in your details while registration, we can assign exercises that is safe to perform,
      and eventually overload to progress. You can also pick the intensity of exerise to fit your preference 
      while adjusting the weight, number of sets and reps.
      
      <br/>
      <br/>
      We use the classic traning method of diveding exercises into 5 body parts: Legs, 
      Chest, Back, Arms, and Shoulders. Core muscle training is attached along other body parts. Every body part is assigned multiple routines for
      maximum stimulation. 
      You will need to do Squat, Bench Press, and Bicep Curl as trial exercises 
      to tell us your current capability. We will calculate the details of the other exercises
      according the the result of trial exercises.
      <br/>
      <br/>
      <h1>What is the best for you?</h1>
      For the sake of safety, we will start from slightly lower intensity to prevent injuries.
      Also we offer tutorials before performing to make sure that you are focusing on the precise
      muscle group with the correct movement.
      You will be asked to review the exercises and we will fine tune them to ensure that they
      are safe and yet efficient.
      If you are seeking for extra instrutions, we also provide one-to-one online personal trainer
      to help you, whether on exercises or nutrition advises.
      <br/>
      <br/>
      Good exercise needs to match with good diet to produce best result. Nutrition advise is
      coming along the way. Stay tuned with us for new features. Happy Exercising!
      </p>
      </div>
      <div className='about-body-img'>
        <img src='kettlebell1.jpg'/>
      </div>
   </div>
   
   </>
  )
}

export default About