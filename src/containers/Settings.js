import { connect } from 'react-redux';
import {
  OPEN_SETTINGS_PANEL,
  CLOSE_SETTINGS_PANEL,
  TRACK_USERNAME } from 'src/store/actions';

import Settings from 'src/components/Settings';

const mapStateToProps = state => ({
  settings: {...state.settings},
  userData: {...state.userData}
});

/* const mapStateToProps = state => {
  return { ...state.settings };
}; */

const mapDispatchToProps = dispatch => ({
  /**
   * Track the current value of the username (pseudo) input.
   */
  trackUsername: (value) => {
    dispatch({
      type: TRACK_USERNAME,
      value
    });
  },

  /**
   * Open the settings panel.
   */
  openPanel: () => {
    dispatch({
      type: OPEN_SETTINGS_PANEL
    });
  },

  /**
   * Close the settings panel.
   */
  closePanel: (evt) => {
    dispatch({
      type: CLOSE_SETTINGS_PANEL
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
