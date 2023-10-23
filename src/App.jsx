import {createContext, useReducer} from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import reducer from './reducer'
export const DataCartContext = createContext();

const initialState = {
  countItem: 1,
  countCart: 0,
  price: 125,
  oldPrice: 250,
  sale: 50
}

function App() {
const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataCartContext.Provider value={{state, dispatch}}>
      <Header />
      <Main />
    </DataCartContext.Provider>
  )
}

export default App
