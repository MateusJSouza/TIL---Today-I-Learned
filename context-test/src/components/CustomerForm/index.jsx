import { useState, useContext } from 'react';
import { CustomerContext } from '../../contexts/Customer';

import './styles.scss'

export const CustomerForm = () => {
  const { submit } = useContext(CustomerContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) =>  {
    // evitar com que o formulário seja enviado
    event.preventDefault();
    console.log('dados componente', { name, email })

    submit({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button typ="submit">Enviar</button>
    </form>
  )
}