import React, { useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';

import { useAuth } from '../../context/authContext';

import { useNavigate } from 'react-router-dom';

import { ErrorProps } from '../../types/error';

import { toast } from 'react-toastify';

export function useUserProfile() {
  const {updateEmailAdress, currentUser} = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorProps[]>([]);

  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === currentUser?.email) {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast.error('Insira um email diferente do atual!');
      } catch {
        toast.warning('Error no servidor!');
      } finally {
        setIsLoading(false);
      }
    }

    if (email !== currentUser?.email) {
      try {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await updateEmailAdress(email);
        toast.success('Email atualizado com sucesso!');
        navigate('/journeys');
      } catch {
        toast.error('Este email já está sendo usado!');
      } finally {
        setEmail('');
        setIsLoading(false);
      }
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
