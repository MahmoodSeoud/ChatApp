import React from 'react'
import {auth} from '../services/firebase'
const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


export default function LogOut() {
const signOut = () => {
    signOut(auth)
} 
  return (
    <button onClick={()  => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}
