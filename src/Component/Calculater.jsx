import React, { useState } from 'react';
import './Calculater.css';
import Calculater1 from './Calculater1';

function Calculater() {
  const [input, setInput] = useState('');

  const onButtonClick = (value) => {
    if (value === 'C') {
      setInput(''); // Clear the input
    } else if (value === '=') {
      try {
        // Evaluate the input safely
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value); // Append the value to input
    }
  };

  return (
    <div className='calculater-head'>
      <div className='background'>
        <div className='text'>
          <input
            className='textarea'
            type='text'
            value={input}
            React
          />
        </div>
        <div className='logics'>
          <Calculater1 onButtonClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculater;
