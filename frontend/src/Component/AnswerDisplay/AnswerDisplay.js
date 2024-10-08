import React from 'react';

const AnswerDisplay = ({ answer }) => {
    return (
        answer && (
            <div>
                <h2>Answer:</h2>
                <p>{answer}</p>
            </div>
        )
    );
};

export default AnswerDisplay;