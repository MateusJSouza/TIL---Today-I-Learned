import { useContext } from 'react';

import { CustomerContext } from '../../contexts/Customer';

export const Hello = () => {
  const { name } = useContext(CustomerContext)

  return (
    <h1>{name}</h1>
  )
}