import { StyledButton } from './styles';

import { Spinner } from '../Spinner';

interface ButtonProps {
  type: 'button' | 'submit';
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ type, disabled, isLoading, children, onClick }: ButtonProps) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && (
        <Spinner size={16}/>
      )}
    </StyledButton>
  );
}
