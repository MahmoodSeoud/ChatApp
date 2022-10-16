import React from 'react'
import {auth} from '../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignIn, LogOut } from './'

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

export default function Navbar() {
    const [user] = useAuthState(auth);
  return (
    <div className={style.nav}>
    <h1 className={style.heading}>Chat App</h1>
    {user ?  <LogOut/> : <SignIn/> }
  </div>
  )
}
