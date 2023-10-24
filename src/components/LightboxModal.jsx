import PropTypes from 'prop-types'

import Images from '../Images.jsx';
import SliderArrows from './sliderArrows.jsx';
import {DataCartContext} from '../App.jsx'
import { useContext } from 'react';

const LightboxModal = ({ setLightbox }) => {
    const { state, dispatch } = useContext(DataCartContext);
    const handleCover = (e) => {
      if (e.target.id === 'coverLightbox') setLightbox(false);
      console.log(e.target)
    }
  return (
      <div id='coverLightbox' onClick={handleCover} className='fixed inset-0 z-20 bg-black/50 flex justify-center items-center'>
      <div className="relative">
        <div className="relative w-3/5 mx-auto">
          <img className='rounded-3xl w-full' src={Images[state.sliderSteps].image} alt="Product" />
          <div className="flex justify-between absolute top-1/2 z-10 w-full -translate-y-24">
            <SliderArrows />
          </div>
          <div onClick={() => setLightbox(false)} className="absolute z-30 -top-14 right-0 w-8 h-8 cursor-pointer fill-white hover:fill-orangeColor transition-colors">
            <svg viewBox='0 0 14 15' className='w-full h-full'  width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"  fillRule="evenodd"/></svg>
          </div>
          <div className="flex">
           {Images.map((image, index) => {
              return (
                <div key={index} onClick={() => dispatch({ type: 'slideStepsThumbnail', index: index})} className={`${state.sliderSteps === index ? 'border-orangeColor opacity-75' : 'border-transparent' } cursor-pointer border-4 rounded-xl overflow-hidden`}>
                    <img className='w-full'  src={image.thumbnail} alt="Product thumbnail" />
                  </div>
              )
           })}
            </div>
        </div>
      </div>
    </div>
  )
}

LightboxModal.propTypes = {
    setLightbox: PropTypes.func
}

export default LightboxModal
