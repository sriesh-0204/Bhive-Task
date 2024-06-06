import React from 'react';
import LogoIcon from '../../assets/images/logo.svg';
import CallIcon from  '../../assets/images/call.svg';
import './index.scss';

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='header-container mx-8 lg:mx-40  py-3 lg:py-6 '>
        <div className='header-menu flex justify-between content-center'>
          <div className='header-logo'>
            <img src={LogoIcon} />
          </div>
          <div className='header-call-icon flex content-center'>
           <img src={CallIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
