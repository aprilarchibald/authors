import React from 'react';
import{Link, Routes, Route} from 'react-router-dom';
import Main from './views/main';
import Create from './views/create';
import Update from './views/update'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path = "/" element ={<Main/>}/>
        <Route path = "/new" element ={<Create/>}/> 
        <Route path = "/edit/:id" element ={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
