import React, { useState } from 'react';
import './style.css';
import DownArrow from '../../assets/icon/downArrow.svg';
import UpArrow from '../../assets/icon/upArrow.svg';
import AdminInput from '../common/adminInput/AdminInput';
import AdminItemOrder from '../adminItemOrder/AdminItemOrder';
import { StatusOrder } from '../../utils/constants';

const ItemList = (props: any) => {
  const { item } = props;

  const [showDetail, setShowDetail] = useState(false);
  const [items, setItems] = useState(item?.items);

  const handleToggleDetail = (e: any) => {
    setShowDetail(!showDetail);
    setItems(item?.items);
  };
  const indexStatus = Object.keys(StatusOrder).findIndex((e: any) => e === item.status);

  return showDetail ? (
    <div className='detail__container'>
      <div className='detail__header'>
        <div className='detail__id'>#{item?.orderId}</div>
        <div className='detail__action'>Chỉnh sửa</div>
        <div className='detail__arrow' onClick={handleToggleDetail}>
          <img src={UpArrow} alt='' />
        </div>
      </div>
      <div className='detail__item'>
        <AdminInput title='ID' content={`#${item.orderId}`} />
        <AdminInput
          title='Trạng thái'
          content={Object.values(StatusOrder)[indexStatus]?.text || 'Đơn hàng mới'}
          classStatus={Object.values(StatusOrder)[indexStatus]?.class}
        />
        <AdminInput
          title='Tổng tiền'
          content={`${item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 VND`}
        />
        <AdminInput title='Khách hàng' content={`${item?.guestInfo?.name}`} />
        <AdminInput title='Số điện thoại' content={`${item?.guestInfo?.phoneNumber}`} />
        <AdminInput title='Địa chỉ' content={`${item?.guestInfo?.address}`} />
      </div>
      <div className='detail__order'>
        <div className='adminInput__label'>Chi tiết đơn hàng</div>
        <div className='detail__orderList'>
          {items?.map((e: any, idx: any) => {
            return <AdminItemOrder key={idx} itemOrder={e} />;
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className='tableList__header tableList__item'>
      <div className='header__id'>{`#${item?.orderId}`}</div>
      <div className='header__nameCustomer'>{`${item?.guestInfo?.name}`}</div>
      <div className='header__phoneNumber'>{`${item?.guestInfo?.phoneNumber}`}</div>
      <div className='header__total'>{`${item?.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 VND`}</div>
      <div className={`header__status ${Object.values(StatusOrder)[indexStatus]?.color}`}>
        {Object.values(StatusOrder)[indexStatus]?.text || 'Đơn hàng mới'}
      </div>
      <div className='arrow__item' onClick={handleToggleDetail}>
        <img src={DownArrow} alt='' />
      </div>
    </div>
  );
};

export default ItemList;
