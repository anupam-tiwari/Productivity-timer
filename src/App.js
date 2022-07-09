import React, { useState } from "react";
import useSound from "use-sound";
import sound from "./assets/sound.mp3";
import Speech from 'react-speech';

const App = () => {
  const [play] = useSound(sound)
  const [usertime, setTime] = useState('');
  var current = new Date();

  function playSound(time){
    const interval = 60000*time;
    console.log(`timer set to ${interval}`)
    if(interval >= 1000){
      setInterval(() => {
        play()
        console.log(current.toLocaleTimeString())
      }, interval);
    }
  };

  return (
    <div>
      <input type='number' onChange={(e) => {setTime(e.target.value)}}></input>
      <button onClick={() => playSound(usertime)}>click me</button>
    </div>
  );
};

export default App;
