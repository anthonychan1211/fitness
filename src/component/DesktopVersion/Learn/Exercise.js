import React from 'react'
import { useState } from 'react'

const Exercise = ({selectedTopic}) => {
    
    const [isChosen, setIsChosen] = useState('')
    function chooseExercise(e){
        setIsChosen(e.target.innerText)
    }

  return (
    <div className={selectedTopic==='Exercises'?'exercises-content':'hidden'}>
       <div className='exercise-grid'>
        <div onClick={chooseExercise} id={isChosen==='Legs'?'topic-chosen':''} className="exercise-category">
            <img src='leg.png' />
            <p>Legs</p>
        </div>
        
        <div onClick={chooseExercise} id={isChosen==='Chest'?'topic-chosen':''} className="exercise-category">
            <img src='Pec.jpg' />
            <p>Chest</p>
        </div>
        
        <div onClick={chooseExercise} id={isChosen==='Back'?'topic-chosen':''} className="exercise-category">
            <img src='back.jpg' />
            <p>Back</p>
        </div>
        <div onClick={chooseExercise} id={isChosen==='Arms'?'topic-chosen':''} className="exercise-category">
            <img src='biceps.jpg' />
            <p>Arms</p>
        </div>
        <div onClick={chooseExercise} id={isChosen==='Shoulders'?'topic-chosen':''} className="exercise-category">
            <img src='front_delt.jpg' />
            <p>Shoulders</p>
        </div>
        <div onClick={chooseExercise} id={isChosen==='Abs'?'topic-chosen':''} className="exercise-category">
            <img src='abs.jpg' />
            <p>Abs</p>
        </div>
       </div>
    </div>
  )
}

export default Exercise