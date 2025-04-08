import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Your App Name',
  description: 'Create a new account to get started',
  keywords: 'register, sign up, create account, new user',
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
