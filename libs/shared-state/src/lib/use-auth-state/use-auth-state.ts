import { create } from 'zustand';

interface AuthState {
  token: string;
  email: string;
  role: string;
  tokenExp: string;
  isProcessingLogin: boolean;
  dispatch: any;
  errorMessage: string | null;
  authenticate: (value: any) => void;
}

type Action = {
  type: 'login' | 'forgotPassword' | 'errorMessage';
  value: any;
};

const countReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case 'login':
      return { isProcessingLogin: action.value };
    case 'forgotPassword':
      return { isProcessingForgotPassword: action.value };
    case 'errorMessage':
      return { errorMessage: action.value };
    default:
      return state;
  }
};

export const useAuthState =  create<AuthState>()((set) => ({
  token: localStorage.getItem('authToken') || '',
  email: localStorage.getItem('authEmail') || '',
  tokenExp: localStorage.getItem('authTokenExp') || '',
  role: localStorage.getItem('role') || '',
  isProcessingLogin: false,
  errorMessage: null,
  dispatch: (action: Action) => set((state) => countReducer(state, action)),
  authenticate: (value) =>
    set((state) => ({
      token: value.token,
      email: value.email,
      tokenExp: value.tokenExp,
      role: value.role,
    })),
}));

export default useAuthState;
