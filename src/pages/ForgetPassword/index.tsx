import { Container, ContainerForgetPassword, Content, Form, ButtonContainer, Footer} from './styles';

import { LoginCard } from '../../components/LoginCard';
import { FormGroup } from '../../components/FormGroup';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

import { useForgetPassword } from '../../hooks/useForgetPassword';

export function ForgotPassword() {

  const { isLoading, handleSubmit, handleEmailChange, getErrorMessageByFieldName, isEmailOk, email } = useForgetPassword();

  return (
    <Container>
      <LoginCard />

      <ContainerForgetPassword>
        <Content>
          <h1>Recuperar senha</h1>
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

            <ButtonContainer>
              <Button
                type='submit'
                disabled={!isEmailOk}
                isLoading={isLoading}
              >
              Recuperar senha
              </Button>
            </ButtonContainer>
          </Form>

          <Footer>
            <Link to='/signup'>Não tenho uma conta</Link>
            <Link to='/'>Fazer Login</Link>
          </Footer>
        </Content>
      </ContainerForgetPassword>
    </Container>
  );
}
