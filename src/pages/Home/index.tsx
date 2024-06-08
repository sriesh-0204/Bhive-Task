import React from 'react';
import './index.scss';
import MainBanner from './mainBanner';
import ChooseUsSection from './chooseUsSection';
import SpaceOverview from './spaceOverView';
import DownloadApp from './downloadApp';

const Home: React.FC = () => (
  <div className='main'>
    <MainBanner />
    <ChooseUsSection />
    <SpaceOverview />
    <DownloadApp />
  </div>
);

export default Home;
