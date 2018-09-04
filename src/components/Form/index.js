/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './form.sass';

/**
 * Code
 */
const Form = () => {
  return (
    <div
      id='form'
      autoComplete='off'
    >
      <input
        id='form-input'
        type="text"
        placeholder='Votre message'
      />
    </div>
  );
};

/**
 * Export
 */
export default Form;
