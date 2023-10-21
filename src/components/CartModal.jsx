import iconDelete from '../assets/images/icon-delete.svg';
import imageProduct1 from '../assets/images/image-product-1-thumbnail.jpg'
import Button from './Button';

const CartModal = () => {
  return (
    <div className="
    rounded-xl bg-white fixed left-0 right-0 top-20 shadow-xl p-2 mx-2
    sm:w-96 sm:left-auto
    ">
      <div className="pl-4 pb-4 pt-2 border-b">
        <h2 className="font-bold text-black">Cart</h2>
      </div>
      <div className="h-40">
        <div className="flex flex-col justify-center items-center h-full px-4">
          <h2 className="font-bold hidden">Your cart empty.</h2>
          <div className="flex items-center justify-between gap-4 pb-6">
            <div className="w-1/6"><img className='rounded-lg' src={imageProduct1} alt="Product" /></div>
            <div className="">
              Fall Limited Edition Sneakers
              <p>$125.00 x 3 <span className='text-black font-bold'>$375.00</span></p>
            </div>
            <div className=""><img src={iconDelete} alt="Delete" /></div>
          </div>
          <Button>Checkout</Button>
        </div>
      </div>

    </div>
  )
}

export default CartModal
