import React from 'react'
import Options from './Options'
import "./Question.css"
import QuestionHint from './QuestionHint'

const Question = ({index=0,type="text",QuestionId=0,statement="",options=[]}) => {
  return (
    <div className='Question'>    
        <h2>Question {index}</h2>
      <hr className='row' />

      <div className='codehint'>
      <div id={QuestionId} className="statement">{statement}</div>
      <div className='hintbox'><QuestionHint language="python">
      import cmath
      a = 1
      b = 5
      c = 6

      # calculate the discriminant
      d = (b**2) - (4*a*c)

      # find two solutions
      sol1 = (-b-cmath.sqrt(d))/(2*a)
      sol2 = (-b+cmath.sqrt(d))/(2*a)
      print('The solution are {0} and {1}'.format(sol1,sol2))
      </QuestionHint></div>
      </div>
        <Options OptionsForQ={options}/>
    </div>
  )
}

export default Question