import React from 'react'
import FormCard from '../../components/Cards/FormCard'
const Form = () => {
  const Questions = [
    {
      "questionNo": 1,
      "question": 'What is React?',
      "answer": 'React is a JS library for frontend development or to make the ui of websites. It just renders the specific part which has changed'
    },
    {
      "questionNo": 2,
      "question": 'What is JSX?',
      "answer": 'JSX stands for javascript xml. it allows the user to write html in js'
    },
    {
      "questionNo": 3,
      "question": 'What is a Component?',
      "answer": 'a component is a reusable part which can be used again and again. eg: Navbar etc.'
    },
    {
      "questionNo": 4,
      "question": 'What is Props?',
      "answer": 'Props used to pass data from parent to child components.'
    },
    {
      "questionNo": 5,
      "question": 'What is useState?',
      "answer": 'useState is a type of react hook which stores the changing data.'
    },
    {
      "questionNo": 6,
      "question": 'What is Purpose of React Router?',
      "answer": 'React router is used for routing in react webpage and allows to navigate between different components or pages.'
    },
    {
      "questionNo": 7,
      "question": 'Why do we use map in react?',
      "answer": 'We use map in react to traverse  a array and return the list of elements.'
    },
    {
      "questionNo": 8,
      "question": 'Why is the key prop important while rendering a list?',
      "answer": 'The key prop is important while rendering a list because it helps react to identify which item has changed or added or removed. It updated the ui and avoid rendering the entire list'
    },
    {
      "questionNo": 9,
      "question": 'What is condition Rendering?',
      "answer": 'condition rendering is a type od technique in react which allows the user to render different components based on the conditions. eg: sign in button or login button'
    },
    {
      "questionNo": 10,
      "question": 'What is the difference between State and Props?',
      "answer": 'State is a built in object in react that stores data which can change over time, while props are used to pass data from parent to child components.'
    },
  
  ]
  return (
    <div>
      {Questions.map((Q) => {
        return (
          <FormCard
            Qno={Q.questionNo}
            Q={Q.question}
            ans={Q.answer}
          />
        )
      })}
    </div>
  )
}

export default Form
