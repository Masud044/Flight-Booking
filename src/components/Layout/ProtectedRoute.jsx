import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute =({ children })=> {
  const { user, loading  } = useContext(AuthContext);
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user?.token) {
    return <Navigate to="/auth" replace />;
  }
   return children;
}
export default ProtectedRoute;
