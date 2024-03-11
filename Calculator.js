import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    let calculatedResult = 0;
    switch (operation) {
      case '+':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        break;
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <input type="text" value={num1} onChange={handleNum1Change} placeholder="Enter first number" />
      <select value={operation} onChange={handleOperationChange}>
        <option value="">Select operation</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" value={num2} onChange={handleNum2Change} placeholder="Enter second number" />
      <button onClick={calculateResult}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;