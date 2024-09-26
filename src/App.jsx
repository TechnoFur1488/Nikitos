import React, { useState } from 'react';
import './App.css';
import { Employee } from './components/employee';
import { nanoid } from 'nanoid'
import { User } from './components/User';
import { Users } from './components/Users';
// import { nanoid } from 'nanoid'

function App() {

  return (
    <>
      <Users />
    </>
  );
}

export default App;
