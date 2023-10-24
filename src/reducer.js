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
        case 'slideStepsPlus': {
            if (state.sliderSteps === 3) {
                state = {
                    ...state,
                    sliderSteps: 0
                }
                return {...state}
            }
            state = {
                ...state,
                sliderSteps: state.sliderSteps + 1
            }
            return { ...state };
        }
        case 'slideStepsMinus': {
            if (state.sliderSteps === 0) {
                state = {
                    ...state,
                    sliderSteps: 3
                }
                return {...state}
            }
            state = {
                ...state,
                sliderSteps: state.sliderSteps - 1
            }
            return { ...state };
        }
        case 'slideStepsThumbnail': {
            state = {
                ...state,
                sliderSteps: action.index
            }
            return { ...state };
        }
        default:
            throw new Error();
    }
}

export default reducer
