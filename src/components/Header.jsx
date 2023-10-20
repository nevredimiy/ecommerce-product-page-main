import iconMenu from '../assets/images/icon-menu.svg';
import logo from '../assets/images/logo.svg';
import iconCart from '../assets/images/icon-cart.svg';
import imageAvatar from '../assets/images/image-avatar.png'

const Header = () => {
  return (
    <header className='container flex justify-between pt-4 pb-6 sm:pb-8 border-b'>
          <div className="flex items-center gap-4">
              <button className='sm:hidden'><img src={iconMenu} alt="Menu" /></button>
              <a className="pr-6" href="/"><img src={logo} alt="Logo" /></a>
          </div>
          <div className="flex-auto hidden sm:block">
              <nav className='flex items-center gap-2 lg:gap-4'>
                  <a className='hover:text-black after:transition-transform after:scale-0 after:hover:scale-100 after:duration-500 after:hover:border-b-4 after:absolute after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor ' href="">Collections</a>
                  <a className='hover:text-black after:transition-transform after:scale-0 after:hover:scale-100 after:duration-500 after:hover:border-b-4 after:absolute after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor ' href="">Men</a>
                  <a className='hover:text-black after:transition-transform after:scale-0 after:hover:scale-100 after:duration-500 after:hover:border-b-4 after:absolute after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor ' href="">Women</a>
                  <a className='hover:text-black after:transition-transform after:scale-0 after:hover:scale-100 after:duration-500 after:hover:border-b-4 after:absolute after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor ' href="">About</a>
                  <a className='hover:text-black after:transition-transform after:scale-0 after:hover:scale-100 after:duration-500 after:hover:border-b-4 after:absolute after:left-0 relative after:w-full after:-bottom-8 after:border-orangeColor ' href="">Contact</a>
              </nav>
          </div>
          <div className="flex items-center gap-2">
              <img src={iconCart} alt="Cart" />
              <img className="w-6 h-6" src={imageAvatar} alt="Avatar" />
            </div>
    </header>
  )
}

export default Header
