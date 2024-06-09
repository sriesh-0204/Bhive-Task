import React from 'react';
import Direction from '../../assets/images/direction.svg';
import SpaceImage from '../../assets/images/space-one.jpg';
import WorkSpace from '../../assets/images/workspace.svg';
import PassOption from './passOption';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { spacelistRequest } from '../../redux/slices/spaceListSlice';

const SpaceCard: React.FC = () => {
  const apiData = useSelector((state: RootState)=>state.spaceList.data)
  const dispatch = useAppDispatch()

  React.useEffect(()=>{
    dispatch(spacelistRequest())
  },[])

  return <div className='main-space flex  flex-wrap  md:flex-row w-full'>
    {
      apiData.map((item,index)=>(
        <div className='main-space-list w-1 md:w-1/4 lg:w-1/3 p-4 rounded-md'>
        <div className='main-space-title flex justify-between'>
          <div className='basis-1/1'>
            <h4>{item.name}</h4>
          </div>consol
          <div className='basis-1/2 flex justify-end'>
            <div className='main-space-km p-3'>
              <img src={Direction} alt='Direction' />
              <p className='pt-2'>6 KM</p>
            </div>
          </div>
        </div>
        <div className='main-space-image py-2'>
          <div className='main-space-image-attach flex p-2 rounded-md'>
            <img src={item.images[0]} alt='WorkSpace' className='pe-1' />
            WorkSpace
          </div>
          <img src={SpaceImage} alt='Space One' className='rounded-md' />
        </div>
        <div className='main-space-pass py-2 flex justify-between items-center'>
          <PassOption type="Day" price="249" />
          <PassOption type="Bulk" price="249" discount="20% Discount" />
        </div>
      </div>
      ))
    }
</div>
}

export default SpaceCard;