import { Container, Content, Form, ButtonContainer } from './styles';

import { Header } from '../../components/Header';
import { FormGroup } from '../../components/FormGroup';
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { useUserProfile } from '../../hooks/useUserProfile';

export function UserProfile() {

  const { isLoading, handleSubmit, handleEmailChange, getErrorMessageByFieldName, isEmailOk, email } = useUserProfile();

  return (
    <>
      <Header />

      <Container>
        <h2>Dados do usuário:</h2>
        <Content>
          <Form onSubmit={handleSubmit}>
            <FormGroup error={getErrorMessageByFieldName('email')}>
              <Input
                value={email}
                type='email'
                placeholder='Insira seu novo email'
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
                Alterar email
              </Button>
            </ButtonContainer>
          </Form>
        </Content>
      </Container>
    </>
  );
}
