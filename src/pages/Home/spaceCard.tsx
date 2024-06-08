import React from 'react';
import Direction from '../../assets/images/direction.svg';
import SpaceImage from '../../assets/images/space-one.jpg';
import WorkSpace from '../../assets/images/workspace.svg';
import PassOption from './passOption';

const SpaceCard: React.FC = () => (
  <div className='main-space flex flex-wrap basis-1/2'>
    <div className='main-space-list p-4 rounded-md'>
      <div className='main-space-title flex justify-between'>
        <div className='basis-1/1'>
          <h4>HSR Sector 6, Service Road</h4>
        </div>
        <div className='basis-1/2 flex justify-end'>
          <div className='main-space-km p-3'>
            <img src={Direction} alt='Direction' />
            <p className='pt-2'>6 KM</p>
          </div>
        </div>
      </div>
      <div className='main-space-image py-2'>
        <div className='main-space-image-attach flex p-2 rounded-md'>
          <img src={WorkSpace} alt='WorkSpace' className='pe-1' />
          WorkSpace
        </div>
        <img src={SpaceImage} alt='Space One' className='rounded-md' />
      </div>
      <div className='main-space-pass py-2 flex justify-between items-center'>
        <PassOption type="Day" price="249" />
        <PassOption type="Bulk" price="249" discount="20% Discount" />
      </div>
    </div>
  </div>
);

export default SpaceCard;
