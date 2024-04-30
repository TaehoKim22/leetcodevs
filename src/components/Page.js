// LeetCodePage.js
import React from 'react';
import Question from './Question';
import CodeEditor from './MonacoEditor';
import TestCases from './TestCases';

const Page = () => {
  // Dummy data for the question, examples, and test cases
  const problem = {
    title: 'Two Sum',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    examples: [
      { input: '[2,7,11,15], 9', output: '[0,1]' },
      // Add more examples here
    ],
    testCases: [
      { input: '[2,7,11,15], 9', output: '[0,1]' },
      // Add more test cases here
    ],
  };

  return (
    <div className="leetcode-page">
      <div className="left-side">
        <Question title={problem.title} description={problem.description} />
        {/* Render examples here */}
        <TestCases cases={problem.examples} />
      </div>
      <div className="right-side">
        <div className="editor-container">
          <CodeEditor language="javascript" theme="vs-dark" />
        </div>
        <div className="testcases-container">
          <TestCases cases={problem.testCases} />
        </div>
      </div>
    </div>
  );
};

export default Page;
