import logoClock from '../../assets/image/clock.png';
import './style.css';

const TimeDescription = () => {
  return (
    <div className='timeDescription__container'>
      <div className='timeDescription__logoClock'>
        <img src={logoClock} alt='clock' />
      </div>
      <div className='timeDescription__content'>
        <p>Thứ 2 - Thứ 7: 9AM - 7:30 PM</p>
        <p>Chủ nhật: 2PM - 8:30 PM</p>
      </div>
    </div>
  );
};

export default TimeDescription;
