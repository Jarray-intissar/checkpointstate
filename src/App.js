import React, { useState } from 'react'
import './App.css';
import imgs from './img.jpg';

function App() {
  const [person, setPerson] = useState({
    fullname: "Intissar jarray",
    bio: "Developeuse ful-stack JS ",
    profission: "Etudiente",
    imgs:"img.jpg",
  });
    const [timer, setTimer] = useState(0);
    const [show, setshow] = useState(false)
    
  return (

    <div className='app'>
     <button  className="btn"onClick={()=>setshow(!show)}>shows</button>
     {show?
     <div className='card'>
      <img style={{width: "300px", height: "200px"}} alt="" src={imgs}/>
      <span>{person.fullname}</span>
      <span>{person.bio}</span>
      <span>{person.profission}</span>
      </div>: null}
      <p>{timer}</p>
      <button className="butt"onClick={()=>setTimer(timer+1)}>count</button>
    </div>
   
  )
}

export default App