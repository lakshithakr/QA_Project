import React, { useEffect, useState } from 'react';
import './QAList.css'
import axios from 'axios';


const QAList = () => {
  const [qaData, setQAData] = useState([]);
  useEffect(() => {
    // Fetch questions and answers from the API
    axios.get('http://localhost:8000/history')
      .then(response => {
        const data = JSON.parse(response.data)
        setQAData(data.reverse()); // Parse JSON string into array
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);


  return (
    <div className='qa-container'>
      <h2>Questions and Answers History</h2>
      <ul className='qa-list'>
        {qaData.map((qa, index) => (
          <li key={index} className='qa-item'>
            <div className='question-part'>
                <strong></strong> {qa.question}<br />
            </div>
            <div className='answer-part'>
                <strong></strong> {qa.answer}
            </div>     
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QAList;