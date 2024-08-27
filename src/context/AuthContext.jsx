import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const initializeAuth = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  const login = (userData) => {
    if (
      user &&
      userData.email === user?.email &&
      userData.password === user?.password
    ) {
      setUser({ ...user, isLoggedin: true });
      localStorage.setItem('user', JSON.stringify({ ...user, isLoggedin: true }));
      return
    }
    return "⚠ Wrong Credentials "
  };

  const signup = (userData) => {
    setUser({ ...userData, isLoggedin: false });
    localStorage.setItem('user', JSON.stringify({ ...userData, isLoggedin: false }));
  };
  const logout = () => {
    setUser({ ...user, isLoggedin: false });
    localStorage.setItem("user", JSON.stringify({ ...user, isLoggedin: false }));
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
