import React from 'react'
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  document.body.style.backgroundColor = darkMode ? '#2d2a2d' : '';
  
  function toggle(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div>
      <Header dark = {darkMode}/>
      <DarkModeSwitch click ={toggle} />
      <Meme dark = {darkMode}/>
    </div>
  );
}

export default App;
