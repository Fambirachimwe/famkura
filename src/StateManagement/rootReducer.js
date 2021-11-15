const initState = {
    isOpen : false,
    
}

const rootReducer = (state=initState, action) => {

    switch (action.type) {
        case 'isOpen':
            return {
                ...state,
                isOpen: action.isOpen
            }
            
        default:
            return state
    }
};





export default rootReducer;
