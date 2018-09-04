import { TOGGLE_LIGHT, toggleLight } from '../actions';

/**
 * This middleware automatically switches the light off after a delay.
 *
 * Strategy:
 * - some action arrives in the middleware
 * - if that action is of type TOGGLE_LIGHT, then:
 *   - if the action is about to switch the light ON, then we must set up a timer
 *     to switch that light off after a delay
 *   - else any existing timer must be destroyed
 */
const autoOff = store => next => (action) => {
  console.log('autoOff', action);
  switch (action.type) {
    case TOGGLE_LIGHT:
      // 1. checking the current light state
      const { light, timer } = store.getState();
      // 2. branching off:
      if (!light) {
        // if light is currenty off, then it's going to be switched on:
        // we must set up a timer
        window.currentAutoOffTimer = window.setTimeout(
          () => {
            store.dispatch(toggleLight());
          },
          timer
        );
      } else {
        // if light is currenty on, then it's going to be switched off:
        // we must clear any existing timer
        window.clearTimeout(window.currentAutoOffTimer);
      }
  }

  next(action);
};

export default autoOff;
