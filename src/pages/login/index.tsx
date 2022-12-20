import React from 'react';
import { AdminController } from '../../../server/api/admin';
import './style.css';

function LoginPage() {
  const handleLogin = async () => {
    const result = await AdminController.getAdmin();
    console.log('result', result);
  };

  return (
    <div className='loginPage'>
      <div className='loginPage__bg'></div>
      <div className='loginPage__content'>
        <div className='text__title--primary loginPage__title'>Chào mừng đến với Pizza custo</div>
        <div>
          <div className='mb-10'>
            <label htmlFor='' className='text-gray-800'>
              Email
            </label>
            <input
              type='text'
              className='form-control block w-full mt-3 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Email address'
            />
          </div>
          <div className='mb-10'>
            <label htmlFor='' className='text-gray-800'>
              Password
            </label>
            <input
              type='password'
              className='form-control block w-full mt-3 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              placeholder='Password'
            />
          </div>

          <button
            className='loginPage__login inline-block px-7 py-3 bg-[#fbbf24] text-white font-bold text-sm leading-snug uppercase rounded shadow-md hover:bg-[#f59e0b] hover:shadow-lg focus:bg-[#f59e0b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#f59e0b] active:shadow-lg transition duration-150 ease-in-out w-full'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
