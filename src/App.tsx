import React, {useCallback, useState} from 'react';
import './App.css';
import {TextInput} from "./text-input/text-input";
import {Password} from "./password";
import {MenuButtonInteraction} from "./menu-button-interaction";
import DayToggle from "./Night && Day Toggle/DayToggle";

enum PATH {
  HOME = '/',
  MENU_BUTTON_INTERACTION = '/menu-button-interaction'
}


function App() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPasswordShow] = useState(false)

  const toggleShowPassword = useCallback(() => setShowPasswordShow(s => !s), [])

  const path = window.location.pathname

  return (
    <div className={'app'}>
      <DayToggle/>
      <div className="nav">
        <a href="/">Home</a>
        <a href="/menu-button-interaction">menu-button-interaction</a>
      </div>
      <main className="main">
        {path === PATH.HOME &&
          <>
            <TextInput label={'Name'}/>
            <Password value={password} showPassword={showPassword} onChange={setPassword}
                      toggleShowPassword={toggleShowPassword}/>
          </>}
        {path === PATH.MENU_BUTTON_INTERACTION && <MenuButtonInteraction/>}
      </main>
    </div>
  )
    ;
}

export default App;
