import React from 'react';
import Work from '../../assets/images/co-work.svg';

const MainBanner: React.FC = () => (
  <div className='main-banner'>
    <div className='main-container mx-8 lg:mx-40 py-3 lg:py-6'>
      <div className='main-banner-section flex mb-4 justify-between items-center'>
        <div className='main-banner-section-div w-1/2 text-left py-6 lg:py-0'>
          <h1>
            Host your meeting with world-class amenities. Starting <span className='main-banner-prize'>at ₹199/-!</span>
          </h1>
        </div>
        <div className='main-banner-section-div w-1/2 flex justify-end'>
          <img src={Work} alt='Co-Work' />
        </div>
      </div>
    </div>
  </div>
);

export default MainBanner;
