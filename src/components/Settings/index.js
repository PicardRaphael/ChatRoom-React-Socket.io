/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './settings.sass';

/**
 * Code
 */
class Settings extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.closePanel();
  };

  handleUsernameChange = (evt) => {
    const { value } = evt.target;
    this.props.trackUsername(value);
  };

  render() {
    const { username } = this.props.userData;
    const { openPanel, closePanel } = this.props;
    const { open } = this.props.settings;
    // const { username, trackUsername, open, openPanel, closePanel } = this.props;
    return (
      <div id='settings' className={open ? 'settings--open' : ''}>
        <div id="settings-toggle" onClick={open ? closePanel : openPanel}/>
        <form
          id='settings-form'
          autoComplete='off'
          onSubmit={this.handleSubmit}
        >
          <input
            id='settings-input'
            type="text"
            placeholder='Username'
            value={username}
            onChange={this.handleUsernameChange}
          />
          <button
            id='settings-submit'
            type='submit'>
            OK
          </button>
        </form>
      </div>
    );
  };
};

/**
 * Export
 */
export default Settings;
