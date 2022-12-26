import React from 'react';
import iconDecrease from '../../../assets/icon/decrease.svg';
import iconIncrease from '../../../assets/icon/increase.svg';
import './style.css';

const Number = (props: any) => {
  const { number, increaseNumber, decreaseNumber } = props;
  return (
    <div className='number__container'>
      <button className='number__box number__decrease' onClick={decreaseNumber}>
        <img src={iconDecrease} alt='' />
      </button>
      <div className='number__box number__box--text'>{number}</div>
      <button className='number__box number__decrease' onClick={increaseNumber}>
        <img src={iconIncrease} alt='' />
      </button>
    </div>
  );
};

export default Number;
