import { useState } from 'react';
import { CustomerForm } from './components/CustomerForm'
import { Hello } from './components/Hello'

import './App.css';

export function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = ({ name, email }) => {
    console.log('dados App', { name, email });

    setName(name)
    setEmail(email)
  }

  return (
    <div className="app">
      <Hello name={name} />
      <CustomerForm handleSubmit={handleSubmit} />
    </div>
  )
}
