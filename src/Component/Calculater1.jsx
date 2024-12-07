import React from 'react';
import './Calculater1.css';

function Calculater1({ onButtonClick }) {
  const buttons1 = ['9', '6', '3', '0'];
  const buttons2 = ['8', '5', '2', '.'];
  const buttons3 = ['7', '4', '1', '='];
  const operators = ['+', '-', '*', '/', 'C'];

  return (
    <div className='calcu-head'>
      <div className='buttons1'>
        {buttons1.map((btn) => (
          <button key={btn} style={{ height: '45px', fontSize: '20px' }} onClick={() => onButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div className='buttons2'>
        {buttons2.map((btn) => (
          <button key={btn} style={{ height: '45px', fontSize: '20px' }} onClick={() => onButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div className='buttons3'>
        {buttons3.map((btn) => (
          <button key={btn} style={{ height: '45px', fontSize: '20px' }} onClick={() => onButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div className='buttons4'>
        {operators.map((op) => (
          <button key={op} style={{ height: '35px', fontSize: '20px' }} onClick={() => onButtonClick(op)}>
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculater1;