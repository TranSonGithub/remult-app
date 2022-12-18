import React from 'react';
import iconFirst from '../../assets/icon/firstItem.svg';
import iconSecond from '../../assets/icon/secondItem.svg';
import iconThird from '../../assets/icon/thirdItem.svg';
import InfoMap from '../../components/infoMap/InfoMap';

import './style.css';

const SectionInfo = () => {
  return (
    <div className='sectionInfo__container'>
      <div className='menu__title'>
        <p className='menu__title--text'>THÔN TIN</p>
        <div className='menu__title--underline sectionInfo__underline'></div>
      </div>
      <div className='sectionInfo__listItem'>
        <div className='sectionInfo__item sectionInfo__item--first'>
          <div className='item__icon'>
            <img src={iconFirst} alt='' />
          </div>
          <div className='item__title'>GIAO HÀNG ĐÚNG GIỜ</div>
          <div className='item__text'>
            Để tăng cường sự tin tưởng và yên tâm với khách hàng, Pizza Gusto cam kết luôn giao hàng đúng giờ và chi phí
            giao hàng rẻ nhất để đảm bảo khách hàng có thể nhận bánh trong thời gian nhanh nhất.
          </div>
        </div>
        <div className='sectionInfo__item sectionInfo__item--second'>
          <div className='item__icon'>
            <img src={iconSecond} alt='' />
          </div>
          <div className='item__title'>THỰC ĐƠN</div>
          <div className='item__text'>
            Chú trọng khâu tuyển chọn đội ngũ đầu bếp chuyên nghiệp, thực đơn của Pizza Gusto luôn được đổi mới, đa dạng
            với pizza nhiều hương và kèm theo đồ uống.
          </div>
        </div>
        <div className='sectionInfo__item sectionInfo__item--third'>
          <div className='item__icon'>
            <img src={iconThird} alt='' />
          </div>
          <div className='item__title'>PHỤC VỤ CHUYÊN NGHIỆP</div>
          <div className='item__text'>
            Pizza Gusto cùng với đội ngũ nhân viên mang đầy sứ c trẻ và nhiệt huyết, chúng tôi luôn mong muốn đem lại
            cho khách hàng của mình chất lượng dịch vụ tốt nhất, luôn lắng nghe và chăm sóc những nhu cầu dù là nhỏ nhất
            của Quý khách.
          </div>
        </div>
      </div>
      <div className='sectionInfo__info'>
        <InfoMap />
      </div>
    </div>
  );
};

export default SectionInfo;
