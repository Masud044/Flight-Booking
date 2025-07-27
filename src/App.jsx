import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FlightsPage from './pages/FlightsPage';
import BookingPage from './pages/BookingPage';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Layout/Navbar';
import ProtectedRoute from './components/Layout/ProtectedRoute';

import { AuthProvider } from './context/AuthContext';
import Toast from '../UI/Toast';

export default function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Toast/>
        <Routes>
          <Route path="/" element={<FlightsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/booking"
            element={
              // <ProtectedRoute>
                <BookingPage />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              // <ProtectedRoute>
                <AdminPage />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}
