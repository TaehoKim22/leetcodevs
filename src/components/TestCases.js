// TestCases.js
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab-header ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="tab-contents">
        {React.Children.map(children, (child, index) => (
          <div className={`tab-content ${index === activeTab ? 'active' : ''}`}>
            {child.props.children}
          </div>
        ))}
      </div>
    </div>
  );
};

const Tab = ({ title, children }) => {
  return <>{children}</>;
};

const TestCases = ({ cases }) => {
  return (
    <Tabs>
      {cases.map((testCase, index) => (
        <Tab key={index} title={`Test Case ${index + 1}`}>
          <table>
            <thead>
              <tr>
                <th>Input</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{testCase.input}</td>
                <td>{testCase.output}</td>
              </tr>
            </tbody>
          </table>
        </Tab>
      ))}
    </Tabs>
  );
};

export default TestCases;
