import { TOGGLE_LIGHT, SET_TIMER_LIGHT } from './actions';

const initialState = {
  messages: [
    {
      id: 1,
      user: 'Philippe',
      content: 'Hello !'
    },
    {
      id: 2,
      user: 'JD',
      content: 'De rien'
    }
  ]
};

/**
 * An action arrives. It must be *transformed* in a state mutation, that is,
 * the reducer *must* return an edited copy of the current state.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_LIGHT:
      return {
        ...state,
        light: !state.light
      };
    case SET_TIMER_LIGHT:
      return {
        ...state,
        timer: action.value
      };

    default:
      return state;
  }
};

export default reducer;
