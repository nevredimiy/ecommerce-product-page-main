const reducer = (state, action) => {
    switch (action.type) {
        case 'countItemPlus': {
            state = {
                ...state,
                countItem: state.countItem + 1
            }
            return { ...state };
        }
        case 'countItemMinus': {
            if(!state.countItem) return {...state}
            state = {
                ...state,
                countItem: state.countItem - 1
            }
            return { ...state };
        }
        case 'countCartUpdate': {
            state = {
                ...state,
                countCart: state.countItem
            }
            return { ...state };
        }
        case 'makeEmptyCart': {
            state = {
                ...state,
                countCart: 0
            }
            return { ...state };
        }
        default:
            throw new Error();


    }
}

export default reducer
