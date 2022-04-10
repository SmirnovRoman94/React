import { TOGGLE_NAME } from "./actions"
import { ADD_CHEK } from './actions'



const initialState = {
    showName: false,
    name: 'Roman',
    check: false,
}



const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_NAME: 
            return {
                ...state, 
                showName: !state.showName
            }
        case ADD_CHEK :
            return {
                ...state,
                check: !state.check
            }
        default: 
            return state;
    }
}
export default profileReducer