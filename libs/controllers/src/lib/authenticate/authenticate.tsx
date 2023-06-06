import { useState, useCallback } from 'react';
import { useAuthState } from '@mastech/shared-state';
import { useApolloClient } from '../utills/ApolloClientSetup';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../utills/Schema';
import { useNavigate } from 'react-router-dom';
import saveToLocalStorage from '../utills/saveToLocalStorage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseAuth {
  isAuthenticated: boolean;
  handleLogout: () => void;
  handleLogin: (value: any) => unknown;
  handleForgotPassword: (
    value: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => unknown;
}

export function useAuth(): UseAuth {
  const isAuthenticated = !!useAuthState((state) => state.token);
  const { client } = useApolloClient();
  const authenticator = useAuthState((state) => state.authenticate);
  const dispatch = useAuthState((state) => state.dispatch);
  const navigate = useNavigate();

  const [login, {}] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      const { token, role, email, tokenExpiryDate } = data.login;
      // Handle successful login, e.g., update token in state or local storage

      saveToLocalStorage(data.login);
      authenticator({ token, role, email, tokenExp: tokenExpiryDate });
      dispatch({ type: 'login', value: false });
      navigate('/');
      return;
    },
    onError: (error) => {
      // Handle login error
      dispatch({ type: 'login', value: false });
      dispatch({ type: 'errorMessage', value: error.message });
    },
  });

  const handleLogin = async (value: any) => {
    dispatch({ type: 'login', value: true });
    dispatch({ type: 'errorMessage', value: null });
    login({ variables: value });
    return '';
  };

  const handleForgotPassword = (value: any, setLoading: any) => {
    return true;
  };

  const handleLogout = () => {
    client.resetStore();
  };
  return { isAuthenticated, handleLogin, handleForgotPassword, handleLogout };
}

export default useAuth;
