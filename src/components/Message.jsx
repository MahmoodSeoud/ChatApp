import React from 'react';
import {auth} from '../services/firebase'
import "../App.css"

const Message = ({ message }) => {
  
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  // console.log(message)
  // console.log(photoURL)
  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img src={ photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        {/* <p>{message.name}</p> */}
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;