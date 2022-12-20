import React from 'react';
import iconDecrease from '../../../assets/icon/decrease.svg';
import iconIncrease from '../../../assets/icon/increase.svg';
import './style.css';

const Number = () => {
  return (
    <div className='number__container'>
      <button className='number__box number__decrease'>
        <img src={iconDecrease} alt='' />
      </button>
      <div className='number__box number__box--text'>2</div>
      <button className='number__box number__decrease'>
        <img src={iconIncrease} alt='' />
      </button>
    </div>
  );
};

export default Number;
