import { useContext, useState } from 'react';
import {DataCartContext} from '../App'

import Images from '../Images.jsx';
import iconNext from '../assets/images/icon-next.svg';
import iconPrevious from '../assets/images/icon-previous.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import iconPlus from '../assets/images/icon-plus.svg';
import Button from './Button.jsx';

const Main = () => {
  const [slideSteps, setSlideSteps] = useState(0);
  const {state, dispatch} = useContext(DataCartContext);

  const handlePrevious = () => {
    setSlideSteps(slideSteps - 1);
    if (0 >= slideSteps) {
      setSlideSteps(3);
    }
  }

  const handleNext = () => {
    setSlideSteps(slideSteps + 1);
    if (Images.length-1 <= slideSteps) {
      setSlideSteps(0);
    }
  }

  return (
    <main className='lg:grid grid-cols-2 place-items-center lg:pt-20 lg:px-16'>
      <div className="overflow-hidden relative ">
        <div className="">
          <img className=' rounded-3xl' src={Images[slideSteps].image} alt="Product" />
        </div>
        <div className="
        flex justify-between
        absolute top-1/2 z-10 w-full px-4 -translate-y-1/2
        lg:hidden
        ">
        <div onClick={handlePrevious} className="
        w-10 h-10
          bg-white flex justify-center items-center
          rounded-full cursor-pointer hover:opacity-75
        ">
          <img className='h-4 pr-1' src={iconPrevious} alt="Previous" />
        </div>
        <div onClick={handleNext} className="w-10 h-10
          bg-white flex justify-center items-center
          rounded-full cursor-pointer hover:opacity-75
          ">
          <img className='h-4 pl-1' src={iconNext} alt="Next" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="container py-4">
        <div className="uppercase text-orangeColor font-bold text-xs pb-2 tracking-wider lg:text-base">Sneaker company</div>
        <h2 className='text-black font-bold text-2xl pb-4 lg:text-4xl'>Fall Limited Edition Sneakers</h2>
        <div className="pb-6">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they`ll withstand everything the weather can offer.</div>
        <div className="flex justify-between items-center lg:flex-col lg:items-start lg:gap-4 lg:mb-4">
          <div className="flex items-center gap-4">
              <span className="text-black text-2xl font-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(state.price)}</span>
            <div className="bg-paleOrange text-orangeColor font-bold px-2 rounded-md">{state.sale}%</div>
            </div>
            <span className='line-through font-bold'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(state.oldPrice)}</span>
          </div>
        </div>
        <div className="container lg:flex lg:items-center lg:gap-4">
        <div className="bg-lightGrayishBlue rounded-xl flex items-center justify-between px-3 py-4 mb-4 lg:flex-shrink-0 lg:gap-2 lg:mb-0">
          <button onClick={() => dispatch({ type: 'countItemMinus'})} className='p-2'><img src={iconMinus} alt="Minus" /></button>
          <div className="font-bold text-black">{state.countItem}</div>
          <button onClick={() => dispatch({ type: 'countItemPlus'})} className='p-2'><img src={iconPlus} alt="Plus" /></button>
        </div>
        <Button>
          <div onClick={() => dispatch({ type: 'countCartUpdate'})} className="">
          <div className="flex justify-center items-center gap-3">
            <div className="w-5 h-5">
              <svg viewBox='0 0 22 20' className='w-5 h-4' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg>
            </div>

              <div className="">Add to cart</div>
            </div>
            </div>
        </Button>

        </div>
      </div>
    </main>
  )
}

export default Main
