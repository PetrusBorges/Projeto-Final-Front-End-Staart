import React, { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import { ErrorProps } from '../../types/error';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/authContext';

import { toast } from 'react-toastify';

export function useForgetPassword() {
  const navigate = useNavigate();
  const {resetPassword} = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorProps[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await resetPassword(email);
      toast.success('Uma nova senha foi enviada para seu email, insira uma nova senha com 8 digitos!');
      navigate('/');
    } catch {
      toast.error('Email não encontrado no nosso banco de dados!');
    } finally {
      setIsLoading(false);
      setEmail('');
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

  return {
    isLoading,
    handleSubmit,
    handleEmailChange,
    getErrorMessageByFieldName,
    isEmailOk,
    email,
  };
}
