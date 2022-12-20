import React from 'react';
import './style.css';
import AdminInput from '../../components/common/adminInput/AdminInput';

const AdminProfile = () => {
  const infoStore = {
    name: 'Cửa hàng pizza gusto Viện Nam',
    numberCompany: '47345324',
    address: 'Số 352 Đường Bưởi, P.Vĩnh PHúc, Q.Ba Đình, Hà Nội',
    phoneNumber: '098 7654 321',
    email: 'lienhieppizzagusto@gmail.com',
  };

  return (
    <div className='adminProfile__container'>
      <div className='text__title adminProfile__title'>Thông tin cửa hàng</div>
      <div className='adminProfile__info'>
        <div className='infoProfile__title'>Thông tin liên hệ</div>
        <div className='infoProfile__detail'>
          <AdminInput title='Tên cửa hàng' content={infoStore.name} />
          <AdminInput title='Địa chỉ' content={infoStore.address} />
          <AdminInput title='Email' content={infoStore.email} />
          <AdminInput title='Số ĐKKD' content={infoStore.numberCompany} />
          <AdminInput title='Số điện thoại' content={infoStore.phoneNumber} />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
