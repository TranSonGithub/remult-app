import React, { useState } from 'react';
import './style.css';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import ChargeItem from '../../components/chargeItem/ChargeItem';
import { mockCarts } from '../../mock/cart';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, selectCartItems } from '../../features/cart/cartSlice';
import { loadingActions } from '../../features/loading/loading';

const ChargePage = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartItems);

  const [guestInfo, setGuestInfo] = useState({});

  const total = cartList.reduce((total, cart: any) => {
    return total + cart.total * cart.number;
  }, 0);
  const totalUSD = (total * 0.042).toFixed(2);

  const handleChangeInfo = (e: any) => {
    console.log(e.target.name);
    let newGuestInfo = guestInfo as any;
    newGuestInfo[e.target.name] = e.target.value;
    setGuestInfo(newGuestInfo);
  };

  const handleCharge = (e: any) => {
    const newItems = cartList.map((e: any) => {
      return {
        item: e.item,
        number: e.number,
        option: e.option,
        sizeName: e.size.name,
        total: e.total,
      };
    });
    if (total !== 0 && Object.keys(guestInfo).length !== 0) {
      dispatch(loadingActions.changeLoading({ show: true }));
      dispatch(
        cartActions.chargeCart({
          total: `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000`,
          guestInfo: guestInfo,
          items: newItems,
        })
      );
    }
  };

  return (
    <div className='chargePage__container'>
      <div className='chargePage__left'>
        <div className='text__title--primary chargePage__title'>Thanh toán</div>
        <form className='chargePage__form'>
          <input
            className='chargePage__input chargePage__name'
            name='name'
            placeholder='Họ và tên'
            onChange={handleChangeInfo}
          />
          <input
            className='chargePage__input chargePage__phoneNumber'
            placeholder='Số điện thoại'
            name='phoneNumber'
            onChange={handleChangeInfo}
          />
          <input
            className='chargePage__input chargePage__address'
            placeholder='Địa chỉ'
            name='address'
            onChange={handleChangeInfo}
          />
          <textarea
            className='chargePage__input chargePage__note'
            placeholder='Ghi chú cho cửa hàng'
            name='notes'
            onChange={handleChangeInfo}
          ></textarea>
        </form>
        <div className='chargePage__payment'>
          <PayPalScriptProvider
            options={{
              'client-id': 'AbTFmaHHW90LviY8srwECgUbQh7-i9i3synq4KgYzPx2A_Zzqg0J7gGA-7pG68GureFZ9ATWriLEe7Jx',
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: totalUSD,
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order?.capture();
                const name = details?.payer.name?.given_name;
                console.log('name', name);

                const newItems = cartList.map((e: any) => {
                  return {
                    item: e.item,
                    number: e.number,
                    option: e.option,
                    sizeName: e.size.name,
                    total: e.total,
                  };
                });
                dispatch(loadingActions.changeLoading({ show: true }));
                dispatch(
                  cartActions.chargeCart({
                    total: `${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000`,
                    guestInfo: guestInfo,
                    items: newItems,
                  })
                );
              }}
            />
          </PayPalScriptProvider>
          <button className='chargePage__pay' onClick={handleCharge}>
            Đặt hàng
          </button>
        </div>
      </div>
      <div className='chargePage__right'>
        <div className='chargePage__listItem'>
          {cartList.map((e: any, idx) => (
            <ChargeItem {...e} key={idx} />
          ))}
        </div>
        <div className='chargePage__underline'></div>
        <div className='chargePage__total'>
          <b>Tổng</b>
          <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 VND</p>
        </div>
      </div>
    </div>
  );
};

export default ChargePage;
