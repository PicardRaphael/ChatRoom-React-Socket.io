/**
 * Types d'action
 */
export const TOGGLE_LIGHT = 'actions/TOGGLE_LIGHT';
export const SET_TIMER_LIGHT = 'actions/SET_TIMER_LIGHT';

/**
 * Action creators
 */
export const toggleLight = () => ({
  type: TOGGLE_LIGHT
});

export const setTimerLight = (value) => ({
  type: SET_TIMER_LIGHT,
  value
});
