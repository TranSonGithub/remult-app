import React, { useState } from 'react';
import './style.css';
import DownArrow from '../../assets/icon/downArrow.svg';
import UpArrow from '../../assets/icon/upArrow.svg';
import AdminInput from '../common/adminInput/AdminInput';
import AdminItemOrder from '../adminItemOrder/AdminItemOrder';
import { StatusOrder } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../features/cart/cartSlice';
import { loadingActions } from '../../features/loading/loading';

const ItemList = (props: any) => {
  const { item } = props;
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const [showDetail, setShowDetail] = useState(false);
  const [items, setItems] = useState(item?.items);
  const [status, setStatus] = useState(item.status);

  const indexStatus = Object.keys(StatusOrder).findIndex((e: any) => e === status);
  const [content, setContent] = useState(Object.values(StatusOrder)[indexStatus]?.option);

  const handleToggleDetail = (e: any) => {
    setShowDetail(!showDetail);
    setItems(item?.items);
  };
  const handleToggleEdit = (e: any) => {
    setIsEdit(!isEdit);
    setStatus(item.status);
    setContent(Object.values(StatusOrder)[indexStatus]?.text);
  };
  const handleChangeStatus = (event: any) => {
    setStatus(event.target.value);
    const newIdx = Object.keys(StatusOrder).findIndex((e: any) => e === event.target.value);
    setContent(Object.values(StatusOrder)[newIdx]?.option);
  };
  const handleSave = (e: any) => {
    setIsEdit(!isEdit);
    setShowDetail(false);
    dispatch(loadingActions.changeLoading({ show: true }));
    dispatch(cartActions.updateOrder({ _id: item._id, body: { status } }));
  };

  console.log(`[ItemList][handleChangeStatus] status -> ${status} `);

  return showDetail ? (
    <div className='detail__container'>
      <div className='detail__header'>
        <div className='detail__id'>#{item?.orderId}</div>
        {isEdit ? (
          <div className='flex'>
            <div className='detail__action--cancel mr-5' onClick={handleToggleEdit}>
              Huỷ
            </div>
            <div className='detail__action' onClick={handleSave}>
              Lưu
            </div>
          </div>
        ) : (
          <div className='detail__action' onClick={handleToggleEdit}>
            Chỉnh sửa
          </div>
        )}

        <div className='detail__arrow' onClick={handleToggleDetail}>
          <img src={UpArrow} alt='' />
        </div>
      </div>
      <div className='detail__item'>
        <AdminInput title='ID' content={`#${item.orderId}`} />
        <AdminInput
          title='Trạng thái'
          startStatus={item.status}
          status={status}
          content={content}
          classStatus={Object.values(StatusOrder)[indexStatus]?.color}
          isEdit={isEdit}
          handleChangeStatus={handleChangeStatus}
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
        {Object.values(StatusOrder)[indexStatus]?.option || 'Đơn hàng mới'}
      </div>
      <div className='arrow__item' onClick={handleToggleDetail}>
        <img src={DownArrow} alt='' />
      </div>
    </div>
  );
};

export default ItemList;
