import Images from '../Images.jsx';
import iconNext from '../assets/images/icon-next.svg';
import iconPrevious from '../assets/images/icon-previous.svg'

const Main = () => {
  return (
    <div className='overflow-hidden relative'>
      <div className="flex">
        {/* {Images.map((item, index) => {
          return <img key={index} src={item.image} alt="Product" />
        })} */}
      </div>
      <div className="
      flex justify-between
      absolute top-1/2 z-10 w-full px-4 -translate-y-1/2
      ">
      <div className="
       w-10 h-10
        bg-white flex justify-center items-center
        rounded-full cursor-pointer hover:opacity-75
      ">
        <img className='h-4 pr-1' src={iconPrevious} alt="Previous" />
      </div>
      <div className="w-10 h-10
        bg-white flex justify-center items-center
        rounded-full cursor-pointer hover:opacity-75
        ">
        <img className='h-4 pl-1' src={iconNext} alt="Next" />
        </div>
        </div>
    </div>
  )
}

export default Main
