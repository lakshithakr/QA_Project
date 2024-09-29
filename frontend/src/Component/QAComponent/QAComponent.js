import React, { useState } from 'react';
import axios from 'axios';
import QuestionInput from '../QuestionInput/QuestionInput';
import AnswerDisplay from '../AnswerDisplay/AnswerDisplay';
import SubmitButton from '../SubmitButton/SubmitButton';
import ResetButton from '../ResetButton/ResetButton';

import "./QAComponent.css"
const QAComponent = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);  // New loading state

  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);  // Set loading to true when request starts
      try {
          const response = await axios.post('http://127.0.0.1:8000/generate-answer/', {
              question: question,
          });
          setAnswer(response.data.answer);
      } catch (error) {
          console.error("Error fetching answer:", error);
      } finally {
          setLoading(false);  // Set loading to false when request completes
      }
  };

  const handleReset = () => {
      setQuestion('');
      setAnswer('');
      setLoading(false);  // Reset loading state if necessary
  };

  return (
      <div className='container-fluid qa-section'>
          <h1>Ask a Question</h1>
          <form onSubmit={handleSubmit}>
              <QuestionInput question={question} setQuestion={setQuestion} />
              <SubmitButton handleSubmit={handleSubmit} />
              <ResetButton handleReset={handleReset} />
          </form>
          {loading ? (
              <p>Loading...</p> 
          ) : (
              <AnswerDisplay answer={answer} />
          )}
      </div>
  );
};

export default QAComponent;
