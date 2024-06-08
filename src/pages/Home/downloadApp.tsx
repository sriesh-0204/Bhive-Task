import React from 'react';
import Download from '../../assets/images/download.png';
import GooglePlay from '../../assets/images/google-play.png';
import AppleStore from '../../assets/images/app-store.png';

const DownloadApp: React.FC = () => (
  <div className='main-download text-left'>
    <div className='main-container mx-8 lg:mx-40 py-12 lg:py-26'>
      <h2>Download our app now</h2>
      <div className='main-download-text'>
        <div className='main-download-image'>
          <img src={Download} alt='Download' />
        </div>
        <div className='text-download flex flex-row lg:flex-col w-100 items-end'>
          <div className='main-left-text'>
            <h4>
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
            </h4>
            <div className='flex my-6 main-playstore'>
              <img src={GooglePlay} alt='Google Play' />
              <img src={AppleStore} className='ps-4' alt='Apple Store' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DownloadApp;
