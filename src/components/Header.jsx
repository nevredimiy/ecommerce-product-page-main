import { useContext, useState } from 'react';
import { DataCartContext } from '../App';
import { useDetectClickOutside } from 'react-detect-click-outside';

import iconMenu from '../assets/images/icon-menu.svg';
import logo from '../assets/images/logo.svg';
import iconCart from '../assets/images/icon-cart.svg';
import imageAvatar from '../assets/images/image-avatar.png';
import iconClose from '../assets/images/icon-close.svg'
import CartModal from './CartModal';

const Header = () => {
  const {state} = useContext(DataCartContext)
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  }
  
  const ref = useDetectClickOutside({ onTriggered: onClose });

  const handleCover = (e) => {
    if (e.target.id === 'cover') setShowMenu(false);
  }

  const handleBurger = () => {
    setShowMenu(!showMenu);
    if(showCart) setShowCart(false)
  }

  return (
    <header className='container flex justify-between pt-4 pb-6 sm:pb-8 border-b'>
      <div className="flex items-center gap-4">
        <button onClick={handleBurger} className='sm:hidden'><img src={iconMenu} alt="Menu" /></button>
        <a className="pr-6" href="/"><img src={logo} alt="Logo" /></a>
      </div>
      <div onClick={handleCover} id='cover' className={`
            ${showMenu ? 'h-screen' : 'h-0'} flex-auto sm:flex
            fixed inset-0 z-20 bg-black/75 sm:bg-transparent
            sm:static sm:h-auto
          `}>
        <nav className={`
        ${showMenu ? 'translate-x-0' : '-translate-x-full'}
         transition-transform duration-500
        flex sm:items-center gap-2 lg:gap-4 flex-col bg-white h-screen w-3/4
          pl-8 pt-6 sm:translate-x-0
          sm:flex-row sm:bg-transparent sm:h-auto sm:w-auto sm:pl-0 sm:pt-0
        `}>
          <div onClick={() => setShowMenu(!showMenu)} className="pb-8 sm:hidden cursor-pointer"><img src={iconClose} alt="Close menu" /></div>
          <a className='
                    font-bold py-2 text-black
                     sm:font-normal sm:py-0 sm:text-inherit
                    hover:text-black after:border-b-0 after:sm:border-b-4
                    after:transition-transform
                    after:scale-0 after:hover:scale-100 after:duration-500 after:absolute
                    after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor
                  ' href="">Collections</a>
          <a className='
                    font-bold py-2 text-black
                     sm:font-normal sm:py-0 sm:text-inherit
                    hover:text-black after:border-b-0 after:sm:border-b-4
                    after:transition-transform
                    after:scale-0 after:hover:scale-100 after:duration-500 after:absolute
                    after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor
                  ' href="">Men</a>
          <a className='
                    font-bold py-2 text-black
                     sm:font-normal sm:py-0 sm:text-inherit
                    hover:text-black after:border-b-0 after:sm:border-b-4
                    after:transition-transform
                    after:scale-0 after:hover:scale-100 after:duration-500 after:absolute
                    after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor
                  ' href="">Women</a>
          <a className='
                    font-bold py-2 text-black
                     sm:font-normal sm:py-0 sm:text-inherit
                    hover:text-black after:border-b-0 after:sm:border-b-4
                    after:transition-transform
                    after:scale-0 after:hover:scale-100 after:duration-500 after:absolute
                    after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor
                  ' href="">About</a>
          <a className='
                    font-bold py-2 text-black
                     sm:font-normal sm:py-0 sm:text-inherit
                    hover:text-black after:border-b-0 after:sm:border-b-4
                    after:transition-transform
                    after:scale-0 after:hover:scale-100 after:duration-500 after:absolute
                    after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor
                  ' href="">Contact</a>
        </nav>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div ref={ref} className="cursor-pointer relative">
          {state.countCart!==0 && <div className="absolute z-0 -top-2 -right-2 rounded-lg bg-orangeColor px-[6px] text-center text-white text-[10px] font-bold">{state.countCart}</div>}
          <img onClick={() => setShowCart(!showCart)} className='cursor-pointer' src={iconCart} alt="Cart" />
          {showCart && <CartModal />}
        </div>

        <img className="
        w-6 h-6 sm:w-12 sm:h-12
        cursor-pointer border border-transparent
        hover:border-orangeColor block rounded-full
        " src={imageAvatar} alt="Avatar" />
      </div>
    </header>
  )
}



export default Header
