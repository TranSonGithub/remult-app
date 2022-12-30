import React from 'react';
import Pizza from '../../assets/image/pizza.png';
import './style.css';

const AdminItemOrder = (props: any) => {
  const { img, name, option, sizes, sizeName, number, total } = props.itemOrder;
  const size = sizes.find((e: any) => e?.name === sizeName);
  return (
    <div className='adminItemOrder__container'>
      <div className='avatar adminItemOrder__avatar'>
        <img src={img || Pizza} alt='' />
      </div>
      <div className='adminItemOrder__content'>
        <div className='text__subTitle  adminItemOrder__title'>{name}</div>
        <div className='adminItemOrder__subTitle'>{`${size?.name}/${size?.size} cm${
          option ? `, ${option?.name}` : ''
        }`}</div>
      </div>
      <div className='adminItemOrder__price'>{`${total?.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        '.'
      )}.000 VND (X${number})`}</div>
    </div>
  );
};

export default AdminItemOrder;
