import { Container } from './styles';

interface FormGroupProps {
  children: React.ReactNode;
  error?: string;
}

export function FormGroup({ children, error }: FormGroupProps) {
  return (
    <Container>
      {children}

      {error && <small>{error}</small>}
    </Container>
  );
}
