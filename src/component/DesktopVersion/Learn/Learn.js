import React from 'react'
import { useState } from 'react'
import Introduction from './Introduction'
import WarmUp from './WarmUp'
import Exercise from './Exercise'
const Learn = () => {

    const [selectedTopic, setSelectedTopic] = useState('Introduction')

    function changeTopic(e){
        setSelectedTopic(e.target.innerText)
    }



  return (
    <>
    <div>
      <div className='expert-img'>
        <img src='Expert.png' />
      </div>
      <div className='about-header-banner'>
        <h1 className='about-header'>Learn Before Start</h1>
        <div className='parallelogram'></div>
        <div className='thin-bar'></div>
      </div>
    </div>
{/* content header */}

    <div className='content-header'>
        <p onClick={changeTopic} className={selectedTopic==='Introduction'?'selected-header':''}>Introduction</p>
        <span>・</span>
        <p onClick={changeTopic} className={selectedTopic==='Warm Up'?'selected-header':''}>Warm Up</p>
        <span>・</span>
        <p onClick={changeTopic} className={selectedTopic==='Exercises'?'selected-header':''}>Exercises</p>
        <span>・</span>
        <p onClick={changeTopic} className={selectedTopic==='After Workout'?'selected-header':''}>After Workout</p>
        <span>・</span>
        <p onClick={changeTopic} className={selectedTopic==='Diet'?'selected-header':''}>Diet</p>
        <span>・</span>
        <p onClick={changeTopic} className={selectedTopic==='Sleep'?'selected-header':''}>Sleep</p>
    </div>

    <div className='learn-content'>

        <Introduction selectedTopic={selectedTopic} />
        <WarmUp selectedTopic={selectedTopic} />
        <Exercise selectedTopic={selectedTopic} />
    </div>
    </>
  )
}

export default Learn