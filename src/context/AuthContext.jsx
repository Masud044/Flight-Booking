import { createContext, useState, useEffect } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ email: 'demo@user.com' }); // Example placeholder
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUser({ email: 'demo@user.com' });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
