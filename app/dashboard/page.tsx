'use client';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/store/auth/types';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const { user } = useAuth();
  const [storedUser, setStoredUser] = useState<User | null>(null);

  useEffect(() => {
    const storageData = localStorage.getItem('registration-storage');
    if (storageData) {
      try {
        const parsedData = JSON.parse(storageData);
        setStoredUser(parsedData.state?.user || null);
      } catch (e) {
        console.error('Error parsing storage data:', e);
      }
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="h2">
        Welcome {user?.firstName || storedUser?.firstName}{' '}
        {user?.lastName || storedUser?.lastName}
      </Typography>
      <Typography variant="h3">
        Email: {user?.email || storedUser?.email}
      </Typography>
    </Box>
  );
};

export default Dashboard;
