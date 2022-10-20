import React from 'react'
import {Chat, SignIn, Navbar, LogOut} from "./components";
import "./App.css"

import {auth} from "./services/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
       <Navbar />
      </header>
    <section>
    {user ?  <Chat/> :  <p className='warning'>Do not violate the community guidelines or you will be banned for life!</p> }
    </section>
  </div>
  )
}

export default App
