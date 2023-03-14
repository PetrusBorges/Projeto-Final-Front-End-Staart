import { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import { ErrorProps } from '../../types/error';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

import { toast } from 'react-toastify';

export function useLogin() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorProps[]>([]);

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await signIn(email, password);
      navigate('/journeys');
    } catch {
      toast.error('Email ou senha incorretos!');
    } finally {
      setEmail('');
      setPassword('');
      setIsLoading(false);
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = error.find((error) => error.field === 'email');

      if (errorAlreadyExists) {
        return;
      }

      setError((prevState) => [
        ...prevState,
        { field: 'email', message: '😕 E-mail inválido!' },
      ]);
    } else {
      setError((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return error.find((error) => error.field === fieldName)?.message;
  }

  const isEmailOk = (email && error.length === 0);
  const isPasswordOk = (password.length > 0);

  return {
    isLoading,
    handleSubmit,
    handleEmailChange,
    getErrorMessageByFieldName,
    isEmailOk,
    isPasswordOk,
    email,
    password,
    setPassword,
  };
}
