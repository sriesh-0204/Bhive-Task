import React from 'react';
import './index.scss';
import { ChooseUs } from '../../constant/chooseus';
import Download from '../../assets/images/download.png';
import GooglePlay from '../../assets/images/google-play.png';
import AppleStore from '../../assets/images/app-store.png';
import Work from '../../assets/images/co-work.svg';
import Direction from '../../assets/images/direction.svg';
import SpaceImage from '../../assets/images/space-one.jpg';
import WorkSpace from '../../assets/images/workspace.svg';

function Home() {
  return (
    <div className='main'>
      <div className='main-banner'>
        <div className='main-container mx-8 lg:mx-40  py-3 lg:py-6 '>
          <div className="flex mb-4 justify-between items-center">
            <div className="w-1/2 text-left">
              <h1 >
                Host your meeting with world-class amenities. Starting <span className='main-banner-prize'>
                  at ₹199/-!
                </span>
              </h1>
            </div>
            <div className='w-1/2 flex justify-end'>
              <img src={Work} />
            </div>
          </div>
        </div>
      </div>
      <div className='main-choose text-left'>
        <div className='main-container mx-8 lg:mx-40  py-12 lg:py-26'>
          <h2>
            Why Choose Us
          </h2>
          <div className='flex flex-wrap space-x-0 flex-wrap py-12 lg:py-16'>
            {ChooseUs.map((feature, index) => (
              <div key={index} className={`main-choose-list flex flex-col items-center lg:items-start lg:flex-row md:flex basis-1/2 lg:basis-1/4 my-6 ${index < 4 ? 'border-bottom-right' : ''
                }`}>
                <img src={feature.icon} alt={feature.title} />
                <h5 className='ps-6 flex items-center'>{feature.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='main-choose text-left'>
        <div className='main-container mx-8 lg:mx-40  py-12 lg:py-26'>
          <h2>
            Our Space Overview
          </h2>
          <div className='flex flex-wrap py-12 lg:py-16'>
            <div className='main-space flex flex-wrap basis-1/2 '>
              <div className=''>
                <div className='main-space-list p-4 rounded-md'>
                  <div className='main-space-title flex justify-between'>
                    <div className='basis-1/1'>
                      <h4>
                        HSR Sector 6, Service Road
                      </h4>
                    </div>
                    <div className='basis-1/2 flex justify-end'>
                      <div className='main-space-km p-3'>
                        <img src={Direction} />
                        <p className='pt-2'>
                          6 KM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='main-space-image py-2'>
                    <div className='main-space-image-attach flex p-2 rounded-md'>
                      <img src={WorkSpace} className='pe-1' /> WorkSpace
                    </div>
                    <img src={SpaceImage} className='rounded-md' />
                  </div>
                  <div className='main-space-pass py-2 flex'>
                    <div className='basis-1/2 main-space-pass-day rounded-md px-2'>
                        <p>
                          Day Pass
                        </p>
                        <h4>
                        ₹ 249 <span>/ Day</span>
                        </h4>
                    </div>
                    <div className='basis-1/2 main-space-pass-bulk rounded-md px-2'>
                        <p>
                          Bulk Pass
                        </p>
                        <h4>
                        ₹ 249 <span>/ Day</span>
                        </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-download text-left'>
        <div className='main-container mx-8 lg:mx-40  py-12 lg:py-26'>
          <h2>
            Download our app now
          </h2>
          <div className='main-download-text'>
            <div className='main-download-image'>
              <img src={Download} />
            </div>
            <div className='text-download flex flex-row lg:flex-col w-100 items-end '>
              <div className='main-left-text'>
                <h4>
                  Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
                </h4>
                <div className='flex my-6 main-playstore'>
                  <img src={GooglePlay} />
                  <img src={AppleStore} className='ps-4' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
