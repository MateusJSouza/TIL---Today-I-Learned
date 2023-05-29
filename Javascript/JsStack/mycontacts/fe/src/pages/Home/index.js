import {
  Card,
  Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ícone de flecha" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Jesus</strong>
              <small>instagram</small>
            </div>

            <span>mateus@devacademy.com.br</span>
            <span>(88) 98885-6584</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Ícone de edição" />
            </a>

            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Jesus</strong>
              <small>instagram</small>
            </div>

            <span>mateus@devacademy.com.br</span>
            <span>(88) 98885-6584</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Ícone de edição" />
            </a>

            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Jesus</strong>
              <small>instagram</small>
            </div>

            <span>mateus@devacademy.com.br</span>
            <span>(88) 98885-6584</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Ícone de edição" />
            </a>

            <button type="button">
              <img src={trash} alt="Ícone de lixeira" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
