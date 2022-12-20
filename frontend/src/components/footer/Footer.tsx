import React from 'react';
import iconFacebook from '../../assets/icon/facebook.svg';
import iconInstagram from '../../assets/icon/instagram.svg';
import iconLinkedIn from '../../assets/icon/linkedin.svg';
import iconCIcon from '../../assets/icon/c_icon.svg';
import './style.css';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__title'>PIZZA GUSTO</div>
      <div className='footer__underline'></div>
      <div className='footer__social'>
        <div className='footer__social--facebook'>
          <img src={iconFacebook} alt='facebook' />
        </div>
        <div className='footer__social--instagram'>
          <img src={iconInstagram} alt='instagram' />
        </div>
        <div className='footer__social--linkedin'>
          <img src={iconLinkedIn} alt='linkedin' />
        </div>
      </div>
      <div className='footer__end'>
        <p className='footer__end--text'>PIZZA GUSTO | One & only PG</p>
        <img src={iconCIcon} alt='' />
        <p className='footer__end--text'>2022, All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
