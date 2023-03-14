import { Container } from './styles';

import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <Container>
      <h1>Você está perdido? ☹</h1>

      <p>Clique <Link to='/'>AQUI</Link> para voltar para página inicial!</p>
    </Container>
  );
}
