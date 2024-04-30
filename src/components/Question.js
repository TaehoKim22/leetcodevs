// Question.js
import React from 'react';

const Question = ({ title, description }) => {
  return (
    <div className="question-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Question;
