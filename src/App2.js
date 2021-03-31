import React,{ useState } from 'react';
import './App.css';
import Login from './Login/login';

function App2() {

  const[token,setToken] = useState('');

  const userLogin =  (tok) =>{
    setToken(tok);
    console.log(tok);
    console.log(token);

  }
  

  return (
    <div className="App2">
      <Login userLogin={userLogin}/>
    </div>
  );
}

export default App2;


