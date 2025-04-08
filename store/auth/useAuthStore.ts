import { create } from 'zustand';
import { AuthState, User } from './types';
import { RegisterFormData } from '@/components/register/types';
import { FormData as LoginFormData } from '@/components/login/types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
  isAuthenticated: false,

  setUser: (data: Partial<User>) =>
    set((state) => ({
      user: { ...state.user, ...data } as User,
    })),

  resetUser: () =>
    set({
      user: null,
      isError: false,
      errorMessage: null,
    }),

  registerUser: async (data: RegisterFormData) => {
    set({ isLoading: true, isError: false, errorMessage: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        isLoading: false,
        user: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
        },
      });
      return true;
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        errorMessage:
          error instanceof Error ? error.message : 'Registration failed',
      });
      return false;
    }
  },

  loginUser: async (data: LoginFormData) => {
    set({ isLoading: true, isError: false, errorMessage: null });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      set({
        isLoading: false,
        isAuthenticated: true,
        user: {
          email: data.email,
        },
      });
      return true;
    } catch (error) {
      set({
        isLoading: false,
        isError: true,
        errorMessage: error instanceof Error ? error.message : 'Login failed',
      });
      return false;
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
      isError: false,
      errorMessage: null,
    });
  },
}));
