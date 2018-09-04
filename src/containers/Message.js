import { connect } from 'react-redux';

import Message from 'src/components/Messages/Message';

/* const mapStateToProps = state =>  {
  return {
    messages: state.messages
  };
}; */
const mapStateToProps = (state, ownProps) => ({
  own: state.userData.username === ownProps.user
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, // Lecture
  mapDispatchToProps// Ecriture
)(Message);
