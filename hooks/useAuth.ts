import { useAuthStore } from '@/store/auth/useAuthStore';
import { RegisterFormData } from '@/components/register/types';
import { FormData as LoginFormData } from '@/components/login/types';

export const useAuth = () => {
  const store = useAuthStore();

  const handleRegister = async (data: RegisterFormData) => {
    return await store.registerUser(data);
  };

  const handleLogin = async (data: LoginFormData) => {
    return await store.loginUser(data);
  };

  return {
    user: store.user,
    isLoading: store.isLoading,
    isError: store.isError,
    errorMessage: store.errorMessage,
    isAuthenticated: store.isAuthenticated,
    setUser: store.setUser,
    resetUser: store.resetUser,
    registerUser: handleRegister,
    loginUser: handleLogin,
    logout: store.logout,
  };
};
