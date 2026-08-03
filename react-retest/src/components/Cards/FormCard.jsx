import React from 'react'
import './FormCard.css'
const FormCard = ({Qno,Q,ans}) => {
  return (
    <div className='form-card'>
      <h2>Question {Qno}: {Q}</h2>
      <p>Answer: {ans}</p>
    </div>
  )
}

export default FormCard
