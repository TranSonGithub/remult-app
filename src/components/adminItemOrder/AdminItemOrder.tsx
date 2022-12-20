import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const AdminItemOrder = () => {
  return (
    <div className='adminItemOrder__container'>
      <div className='avatar adminItemOrder__avatar'>
        <img src={Pizza} alt='' />
      </div>
      <div className='adminItemOrder__content'>
        <div className='text__subTitle  adminItemOrder__title'>Pizza hot</div>
        <div className='adminItemOrder__subTitle'>Size S/20cm, Thêm phô mai</div>
      </div>
      <div className='adminItemOrder__price'>120.000 (X2)</div>
    </div>
  );
};

export default AdminItemOrder;
