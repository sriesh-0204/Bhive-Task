import React from 'react';
import ArrowOne from '../../assets/images/arrow-one.svg';
import ArrowTwo from '../../assets/images/arrow-two.svg';
import ArrowThree from '../../assets/images/arrow-three.svg';

interface PassOptionProps {
  type: string;
  price: string;
  discount?: string;
}

const PassOption: React.FC<PassOptionProps> = ({ type, price, discount }) => (
  <div className={`basis-1/2 main-space-pass-${type.toLowerCase()} rounded-md px-2 flex justify-between items-center`}>
    {discount && <div className='main-space-pass-bulk-discount'><p>{discount}</p></div>}
    <div>
      <p>{type} Pass</p>
      <h4>₹ {price} <span>/ Day</span></h4>
    </div>
    <div className='flex main-space-arrow-image me-2'>
      <img src={ArrowOne} alt='Arrow One' />
      <img src={ArrowTwo} alt='Arrow Two' />
      <img src={ArrowThree} alt='Arrow Three' />
    </div>
  </div>
);

export default PassOption;
