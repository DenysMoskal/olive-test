import { RegisterFormData } from '@/components/register/types';
import { FormData as LoginFormData } from '@/components/login/types';

export interface User {
  firstName?: string;
  lastName?: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  isAuthenticated: boolean;

  setUser: (data: Partial<User>) => void;
  resetUser: () => void;
  registerUser: (data: RegisterFormData) => Promise<boolean>;
  loginUser: (data: LoginFormData) => Promise<boolean>;
  logout: () => void;
}
