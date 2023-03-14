import { Container, Content, Form, ButtonContainer, Footer, ErrorButon} from './styles';

import { FormGroup } from '../../components/FormGroup';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';
import { useSignUp } from '../../hooks/useSignUp';

export function SignUp() {

  const { setConfirmPassword, isLoading, handleSubmit, handleEmailChange, getErrorMessageByFieldName, isEmailOk, isPasswordOk, email, password, setPassword,
    confirmPassword } = useSignUp();

  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
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
              placeholder='Senha com até 8 dígitos'
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Input
              value={confirmPassword}
              type='password'
              maxLength={8}
              placeholder='Confirme sua senha com até 8 dígitos'
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </FormGroup>

          <ButtonContainer>
            <Button
              type='submit'
              disabled={!isEmailOk || !isPasswordOk}
              isLoading={isLoading}
            >
              Fazer cadastro
            </Button>

          </ButtonContainer>
        </Form>

        {!isPasswordOk && (
          <ErrorButon>
            Suas senhas não coincidem!
          </ErrorButon>
        )}

        <Footer>
          <Link to='/'>Ja tenho uma conta</Link>
          <Link to='/forgot-password'>Esqueci minha senha</Link>
        </Footer>
      </Content>
    </Container>
  );
}
