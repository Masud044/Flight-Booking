import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar bg-base-200 px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">Flight Booking</Link>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost">Flights</Link>
        {user ? (
          <>
            <Link to="/booking" className="btn btn-ghost">Booking</Link>
            <Link to="/admin" className="btn btn-ghost">Admin</Link>
            <button onClick={logout} className="btn btn-error">Logout</button>
          </>
        ) : (
          <Link to="/auth" className="btn btn-primary">Login</Link>
        )}
      </div>
    </nav>
  );
}
