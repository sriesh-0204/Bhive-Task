import React from 'react';
import SpaceCard from './spaceCard';

const SpaceOverview: React.FC = () => (
  <div className='main-choose text-left'>
    <div className='main-container mx-8 lg:mx-40 py-12 lg:py-26'>
      <h2>Our Space Overview</h2>
      <div className='flex flex-wrap py-12 lg:py-16'>
        <SpaceCard />
      </div>
    </div>
  </div>
);

export default SpaceOverview;
