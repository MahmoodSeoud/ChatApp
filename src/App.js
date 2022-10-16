import React from 'react'
import {Chat, Navbar} from "./components";

import {auth} from "./services/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
  
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.appContainer}>
    <section className={style.sectionContainer}>
      {/* Navbar */}
      <Navbar/>
      {/* chat component */}
      {user ?<Chat /> : null }
    </section>
  </div>
  )
}

export default App
