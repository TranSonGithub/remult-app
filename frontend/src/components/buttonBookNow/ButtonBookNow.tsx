import { Link } from 'react-router-dom';
import imageLeaves from '../../assets/image/leaves.png';
import { routerUser } from '../../utils/route';
import './style.css';

const ButtonBookNow = () => {
  return (
    <Link to={routerUser.menu}>
      <div className='buttonBookNow__container relative'>
        <img src={imageLeaves} alt='leave' className='buttonLeave absolute' />
        <p className='buttonBookNow__text'>Đặt hàng ngay</p>
      </div>
    </Link>
  );
};

export default ButtonBookNow;
