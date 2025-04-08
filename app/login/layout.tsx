import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Your App Name',
  description: 'Login to your account to access all features',
  keywords: 'login, sign in, authentication, account access',
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
