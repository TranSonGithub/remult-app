import React from 'react';
import InfoMap from '../../components/infoMap/InfoMap';
import './style.css';

const AboutPage = () => {
  return (
    <div className='menuPage__container'>
      <div className='menuPage__top'>
        <h2 className='text__title aboutPage__title'>CHÍNH SÁCH DỊCH VỤ</h2>
        <div className='aboutPage__text'>
          <b>- GIAO HÀNG MIỄM PHÍ: </b>
          <p>
            Pizza Gusto giao hàng miễn phí trong phạm vi 4km từ cửa hàng gần nhất. Phí giao hàng có thể thay đổi trong
            một số trường hợp thời tiết khắc nghiệt.
          </p>
        </div>
        <div className='aboutPage__text'>
          <b>- THỜI GIAN LÀM VIỆC: </b>
          <p>
            Tổng đài Pizza Express tiếp nhận đơn hàng trong khung giờ từ 8:00 – 21:00 hàng ngày. Bộ phận giao hàng của
            chúng tôi có thể phục vụ Quý khách ngoài khung giờ trên nếu có yêu cầu.
          </p>
        </div>
        <div className='aboutPage__text'>
          <b>– GIAO NHẬN SẢN PHẨM: </b>
          <p>
            Quý khách vui lòng kiểm tra và đối chiếu sản phẩm với hóa đơn trước khi thanh toán với nhân viên giao hàng
            của chúng tôi. Sau khi giao hàng thành công, Pizza Express sẽ không chịu trách nhiệm đối với hình thức và số
            lượng sản phẩm đã bàn giao.
          </p>
        </div>
        <div className='aboutPage__text'>
          <b>- BẢO MẬT THÔNG TIN: </b>
          <p>
            Pizza Express tôn trọng và cam kết bảo mật các thông tin mang tính riêng tư của Quý khách. Chúng tôi sẽ chỉ
            sử dụng thông tin Quý khách cung cấp cho mục đích cung cấp dịch vụ và chăm sóc khách hàng.
          </p>
        </div>
      </div>
      <div className='menuPage__map'>
        <h2 className='text__title aboutPage__title'>BẢN ĐỒ</h2>
        <InfoMap />
      </div>
    </div>
  );
};

export default AboutPage;
