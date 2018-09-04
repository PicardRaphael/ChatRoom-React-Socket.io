import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

/* const mapStateToProps = state =>  {
  return {
    messages: state.messages
  };
}; */
const mapStateToProps = state => ({
  messages: state.messages
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps, // Lecture
  mapDispatchToProps// Ecriture
)(Messages);
