/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Message from 'src/components/Messages/Message';
// Styles et assets
import './messages.sass';

/**
 * Code
 */
const Messages = () => {
  return (
    <div id='messages'>
      <Message user='Philippe' content='Bonjour'/>
      <Message user='Jd' content='De rien' own/>
    </div>
  );
};

/**
 * Export
 */
export default Messages;
