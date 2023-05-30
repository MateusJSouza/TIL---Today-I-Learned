import PropTypes from 'prop-types';

import { useState } from 'react';
import { FormGroup } from '../FormGroup';

import { ButtonContainer, Form } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');

  return (
    <Form>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é inválido"
      >
        <Input
          placeholder="E-mail"
          error
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="number"
          placeholder="Telefone"
        />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
