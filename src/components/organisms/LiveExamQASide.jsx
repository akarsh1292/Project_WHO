import React from 'react'
import Questions from '../RawData/Questions'
import Header from '../molecules/Header'
import Question from '../molecules/Question'
import Footer from '../molecules/Footer'
import "./LiveExamQASide.css"
const LiveExamQASide = () => {
  var Q=Questions[0]

    return (
        <div className='LiveExamQASide'>
            <Header />
            <Question index={1} QuestionId={Q.id} statement={Q.question} options={Q.options} />
            <Footer />
        </div>
    )
}

export default LiveExamQASide