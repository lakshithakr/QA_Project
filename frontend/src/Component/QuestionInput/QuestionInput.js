import React from 'react';

const QuestionInput = ({ question, setQuestion }) => {
    return (
        <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here"
            required
        />
    );
};

export default QuestionInput;