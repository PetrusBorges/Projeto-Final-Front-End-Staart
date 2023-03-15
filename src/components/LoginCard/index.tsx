import { SvgElipse } from '../SvgElipse';

import { Container } from './styles';

export function LoginCard() {
  return (
    <Container>
      <small>Create<strong>Push</strong></small>

      <SvgElipse />

      <h1>Os melhores instrutores do mercado de tecnologia!</h1>
      <p>Você vai estudar, praticar, discutir e se aprofundar em uma plataforma que respira tecnologia.</p>
    </Container>
  );
}
