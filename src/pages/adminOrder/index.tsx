import React from 'react';
import './style.css';
import ItemList from '../../components/itemList/ItemList';

const AdminOrder = () => {
  return (
    <div className='adminOrder__container'>
      <div className='adminOrder__search'>
        <div className='text__title header__title'>Đơn hàng</div>

        <form className='flex items-center w-full'>
          <label htmlFor='simple-search' className='sr-only'>
            Nhập số điện thoại
          </label>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </div>
            <input
              type='text'
              id='simple-search'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Nhập số điện thoại'
              required
            />
          </div>
        </form>
      </div>
      <div className='adminOrder__tableList'>
        <div className='tableList__header'>
          <div className='header__item header__id'>ID</div>
          <div className='header__item header__nameCustomer'>Khách hàng</div>
          <div className='header__item header__phoneNumber'>Số điện thoại</div>
          <div className='header__item header__total'>Tổng tiền</div>
          <div className='header__item header__status'>Trạng thái</div>
        </div>
        <ItemList />
      </div>
    </div>
  );
};

export default AdminOrder;
