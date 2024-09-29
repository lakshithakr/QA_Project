import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/generate-answer/', {
                question: question,
            });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error("Error fetching answer:", error);
        }
    };

    const handleReset = () => {
        setQuestion('');
        setAnswer('');
    };

    return (
        <div>
            <h1>Ask a Question</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Type your question here"
                    required
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button> {/* Reset Button */}
            </form>
            {answer && (
                <div>
                    <h2>Answer:</h2>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default QuestionForm;