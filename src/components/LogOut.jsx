import React from 'react'
import "../App.css"
import {auth} from '../services/firebase'

export default function LogOut() {
const signOut = () => {
    signOut(auth)
} 
  return (
    <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
    </button>
  )
}
