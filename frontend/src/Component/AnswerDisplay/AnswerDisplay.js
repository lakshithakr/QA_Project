import React from 'react';
import './AnswerDisplay.css'
const AnswerDisplay = ({ answer }) => {
    return (
        answer && (
            <div className="answer-container">
                <p className="answer-text">{answer}</p>
            </div>
        )
    );
};

export default AnswerDisplay;