import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  loggedIn: boolean;
  login: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);

  return (
    <AuthContext.Provider value={{ loggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
