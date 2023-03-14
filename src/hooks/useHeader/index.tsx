import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { useAuth } from '../../context/authContext';

import { toast } from 'react-toastify';

export function useHeader() {
  const {currentUser, logOut} = useAuth();
  const [menuOptions, setMenuOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogout() {
    try {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await logOut();
    } catch {
      toast.error('Ocorreu um erro ao fazer logout!');
    } finally {
      navigate('/');
      setIsLoading(false);
    }
  }

  return {
    currentUser,
    menuOptions,
    setMenuOptions,
    isLoading,
    handleLogout,
  };
}
