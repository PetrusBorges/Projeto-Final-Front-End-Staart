import { Container, ContainerLogin, Content, Form, ButtonContainer, Footer} from './styles';

import { LoginCard } from '../../components/LoginCard';
import { FormGroup } from '../../components/FormGroup';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { useLogin } from '../../hooks/useLogin';

export function Login() {

  const { isLoading, handleSubmit, handleEmailChange, getErrorMessageByFieldName, isEmailOk, isPasswordOk, email, password, setPassword } = useLogin();

  return (
    <Container>
      <LoginCard />

      <ContainerLogin>
        <Content>
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessageByFieldName('email')}>
              <Input
                value={email}
                type='email'
                placeholder='Email'
                onChange={handleEmailChange}
                error={getErrorMessageByFieldName('email')}
              />
            </FormGroup>

            <FormGroup>
              <Input
                value={password}
                type='password'
                maxLength={8}
                placeholder='Senha'
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormGroup>

            <ButtonContainer>
              <Button
                type='submit'
                disabled={!isEmailOk || !isPasswordOk}
                isLoading={isLoading}
              >
              Fazer login
              </Button>
            </ButtonContainer>
          </Form>

          <Footer>
            <Link to='/signup'>Não tenho uma conta</Link>
            <Link to='/forgot-password'>Esqueci minha senha</Link>
          </Footer>
        </Content>
      </ContainerLogin>
    </Container>
  );
}
