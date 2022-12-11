import ButtonBookNow from '../../components/buttonBookNow/ButtonBookNow';
import HomeDescription from '../../components/homeDescription/HomeDescription';
import TimeDescription from '../../components/timeDescription/TimeDescription';
import './style.css';

const HomeHeaderPage = () => {
  return (
    <div className='homeHeader__container relative'>
      <HomeDescription />
      <div className='homeHeader__button absolute'>
        <ButtonBookNow />
      </div>
      <div className='homeHeader__timeDescription'>
        <TimeDescription />
      </div>
    </div>
  );
};

export default HomeHeaderPage;
