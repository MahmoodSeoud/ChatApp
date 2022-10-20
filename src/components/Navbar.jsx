import React from 'react'
import {auth} from '../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignIn, LogOut } from './'
import "../App.css"


export default function Navbar() {
    const [user] = useAuthState(auth);
  return (
    <div >
      {user ?  <LogOut/> : <SignIn/> }
    </div>
  )
}
