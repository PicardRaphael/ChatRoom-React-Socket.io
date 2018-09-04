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
const Settings = () => {
  return (
    <div id='settings' className='settings--open'>
      <div id="settings-toggle" />
      <form
        id='settings-form'
        autoComplete='off'
      >
        <input
          id='settings-input'
          type="text"
          placeholder='Username'
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

/**
 * Export
 */
export default Settings;
