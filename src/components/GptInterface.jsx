import React from 'react';
import './GptInterface.css';

const GptInterface = ({ name }) => {
  return (
    <div>
      <h3 className='user_call'>Hey {name} what is your problem</h3>

      <div className="chat-interface">
        <div className="chat-input-holder flex-column">
          <form className="flex-grow-1">
            <input
              rows="1"
              className="chat-input-textarea flex-shrink-0"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default GptInterface;
