import React from 'react';
import './QuestionInput.css';
const QuestionInput = ({ question, setQuestion }) => {
    return (
        <div className='input-container'>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here"
                required
            />
        </div>

    );
};

export default QuestionInput;