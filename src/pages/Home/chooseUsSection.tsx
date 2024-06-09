import React from 'react';
import { ChooseUs } from '../../constant/chooseus';

const ChooseUsSection: React.FC = () => (
  <div className='main-choose text-left'>
    <div className='main-container mx-8 lg:mx-40 py-12 lg:py-26'>
      <h2>Why Choose Us</h2>
      <div className='flex flex-wrap py-12 lg:py-16'>
        {ChooseUs.map((feature, index) => (
          <div
            key={index}
            className={`main-choose-list flex flex-col items-center lg:items-start lg:flex-row md:flex  lg:basis-1/4 my-6 ${index < 4 ? 'border-bottom-right' : ''}`}
          >
            <img src={feature.icon} alt={feature.title} />
            <h5 className='ps-0 lg:ps-6 flex items-center'>{feature.title}</h5>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ChooseUsSection;
