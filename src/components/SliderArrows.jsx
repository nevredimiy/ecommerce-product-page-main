import {DataCartContext} from '../App.jsx'
import { useContext } from 'react';

const SliderArrows = () => {
    const { dispatch } = useContext(DataCartContext);

  return (
    <>

      <div onClick={() => dispatch({ type: 'slideStepsMinus'})} className="
        w-10 h-10
          bg-white flex justify-center items-center
          rounded-full cursor-pointer stroke-black hover:stroke-orangeColor transition-colors
        ">
              <svg className='w-4 h-4' viewBox='0 0 13 18' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="current" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
        </div>
        <div onClick={() => dispatch({type: 'slideStepsPlus'})} className="w-10 h-10
          bg-white flex justify-center items-center
          rounded-full cursor-pointer stroke-black hover:stroke-orangeColor transition-colors
          ">
          <svg className='w-4 h-4' viewBox='0 0 13 18' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="current" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
          </div>
    </>
  )
}

export default SliderArrows
