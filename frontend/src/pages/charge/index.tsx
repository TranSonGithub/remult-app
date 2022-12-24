import React from 'react';
import './style.css';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import ChargeItem from '../../components/chargeItem/ChargeItem';
import { mockCarts } from '../../mock/cart';

const ChargePage = () => {
  return (
    <div className='chargePage__container'>
      <div className='chargePage__left'>
        <div className='text__title--primary chargePage__title'>Thanh toán</div>
        <form className='chargePage__form'>
          <input className='chargePage__input chargePage__name' placeholder='Họ và tên' />
          <input className='chargePage__input chargePage__phoneNumber' placeholder='Số điện thoại' />
          <input className='chargePage__input chargePage__address' placeholder='Địa chỉ' />
          <textarea className='chargePage__input chargePage__note' placeholder='Ghi chú cho cửa hàng'></textarea>
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
                        value: '1',
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order?.capture();
                const name = details?.payer.name?.given_name;
                alert('Transaction completed by ' + name);
              }}
            />
          </PayPalScriptProvider>
          <button className='chargePage__pay'>Đặt hàng</button>
        </div>
      </div>
      <div className='chargePage__right'>
        <div className='chargePage__listItem'>
          {mockCarts.map((e, idx) => (
            <ChargeItem {...e} key={idx} />
          ))}
        </div>
        <div className='chargePage__underline'></div>
        <div className='chargePage__total'>
          <b>Tổng</b>
          <p>230.000 VND</p>
        </div>
      </div>
    </div>
  );
};

export default ChargePage;
