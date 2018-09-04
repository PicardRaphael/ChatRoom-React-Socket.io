import { OPEN_SETTINGS_PANEL, CLOSE_SETTINGS_PANEL } from './actions';

const initialState = {
  settings: {
    open: false,
    username: 'Anonymous'
  },

  messages: [
    {
      id: 1,
      user: 'JD',
      content: 'Hello !'
    },
    {
      id: 2,
      user: 'Anonymous',
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
    case OPEN_SETTINGS_PANEL: {
      const settings = {
        ...state.settings,
        open: true
      };
      return {
        ...state,
        settings
      };
    }
    case CLOSE_SETTINGS_PANEL: {
      const settings = {
        ...state.settings,
        open: false
      };
      return {
        ...state,
        settings
      };
    }
    default:
      return state;
  }
};

export default reducer;
