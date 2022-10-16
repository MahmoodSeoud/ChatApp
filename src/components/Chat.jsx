import React, { useState, useEffect, useRef } from 'react'

import { collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import { db } from '../services/firebase'

import { Message, SendMessage } from './';


const style = {
  main: `flex flex-col p-[10px]`,
}

function Chat() {
const [messages, setMessages] = useState([]);
const scroll = useRef();

useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
        <main className={style.main}>
            {/* Chat message component */}
            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
                ))}

        </main>
            {/* Send message component */}
            <SendMessage scroll={scroll} />
            <span ref={scroll}></span>
    </>
  )
}

export default Chat