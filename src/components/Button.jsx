import PropTypes from 'prop-types'

const Button = ({children}) => {
  return (
      <button className='
      w-full bg-orangeColor py-4 rounded-lg text-white font-bold
      hover:bg-orangeColor/75 transition max-w-md
    '>
        {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  addClass: PropTypes.string
}

export default Button
