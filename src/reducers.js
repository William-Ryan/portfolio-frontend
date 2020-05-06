import {
    SET_PROJECTS
} from './actions'

const initialState = {
    projects: []
}
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PROJECTS:
        return {
          ...state,
          projects: action.payload
        };
        default: 
        return state
    }
}
