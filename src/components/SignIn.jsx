import React from 'react'

import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import GoogleButton from 'react-google-button'

import { auth } from '../services/firebase' 


const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}

export default function SignIn() {
  return (
    <div className={style.wrapper}>
        <GoogleButton  onClick={googleSignIn}/>
    </div>
  )
}
