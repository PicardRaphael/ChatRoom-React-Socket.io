/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
import './messages.sass';

/**
 * Code
 */
const Messages = () => {
  return (
    <div id='messages'>
      <div className="message">
        <div className="message-user">Marie</div>
        <div className="message-content">Salut</div>
      </div>
      <div className="message message--own">
        <div className="message-user">John</div>
        <div className="message-content">Hello</div>
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Messages;
