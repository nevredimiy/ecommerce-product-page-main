import { createContext, useReducer } from 'react';

import Header from "./components/Header";
import Main from "./components/Main";
import reducer from './reducer'
export const DataCartContext = createContext();

const initialState = {
  countItem: 1,
  countCart: 0,
  price: 125,
  oldPrice: 250,
  sale: 50,
  sliderSteps: 0
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const closePopup = () => {
    console.log('Popup closed');
  };

  return (
    <DataCartContext.Provider value={{state, dispatch}}>
      <Header onClose={closePopup} />
      <Main />
    </DataCartContext.Provider>
  )
}

export default App
