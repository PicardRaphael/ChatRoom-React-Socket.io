import { connect } from 'react-redux';

import App from 'src/components/App';
import { toggleLight, setTimerLight } from 'src/store/actions';

const mapStateToProps = state => ({
  light: state.light,
  timer: state.timer
});

const mapDispatchToProps = dispatch => ({
  toggleLight: () => {
    dispatch(toggleLight());
  },
  setTimerLight: (evt) => {
    dispatch(setTimerLight(evt.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
