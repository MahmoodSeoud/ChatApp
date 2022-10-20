import React,  {useState} from 'react'
import "../App.css"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import {auth, db} from '../services/firebase'


const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
}

export default function SendMessage({scroll}) {
const [input, setInput] = useState("");

async function sendMessage(e) {
    e.preventDefault();

    if(input === "") {
        return;
    }

    const {uid, displayName, photoURL} = auth.currentUser
    console.log(auth.currentUser)
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        photoURL,
        createdAt: serverTimestamp()
    })
    setInput("")
    scroll.current.scrollIntoView({behavior: 'smooth'})
}
  return (
    <form onSubmit={sendMessage}>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Message'/> 
        <button>Send</button>
    </form>
  )
}
