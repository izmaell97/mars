import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Calyzasob} from "./components/calosc";


function App() {
  /*
  let iron=0;
  let tytan=0;
  let flora=0;
  let energy=0;
  let hot=0;
  let megakredtyt=0;
*/

  return   (
        <div>
        <Calyzasob text="puste" background='white' color='black' text2="puste" />
          <Calyzasob text="STAL ILOŚĆ" background='chocolate' color='grey' text2="STAL" />
          <Calyzasob text="TYTAN ILOŚĆ" background='black' color='goldenrod' text2="TYTAN" />
        <Calyzasob text="ROŚLINNOŚĆ ILOŚĆ" background='darkolivegreen' color='darkkhaki' text2="ROŚLINNOŚĆ" />

        <Calyzasob text="ENERGIA ILOŚĆ" background='darkmagenta' color='azure' text2="ENERGIA" />
<Calyzasob text="CIEPŁO ILOŚĆ" background='CRIMSON' color='YELLOW' text2="CIEPŁO" />
  </div>
      )




}

export default App
