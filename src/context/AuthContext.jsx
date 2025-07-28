import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create context
 export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    // Optionally decode the token or fetch user info
    try {
      const userInfo = jwtDecode(token);
      setUser({ token, ...userInfo });
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      setUser({ token });
    }
  }
  setLoading(false); 
}, []);

  const login = (token) => {
    if (!token) return;
    console.log('Saving token to localStorage:', token);
    localStorage.setItem('token', token);
    setUser({ token });
  };


  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,  login, logout, loading  }}>
      {children}
    </AuthContext.Provider>
  );
};

