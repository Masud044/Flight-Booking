import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

 const Navbar =()=> {
  // const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar bg-blue-900 px-4">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-white">Flight Booking</Link>
      </div>
      <div className="flex-none justify-evenly items-center space-x-4">
        <Link to="/" className=" text-white font-medium ">Flights</Link>
        {/* {user ? (
          <> */}
            <Link to="/booking" className="text-white font-medium ">Booking</Link>
            <Link to="/admin" className="text-white font-medium ">Admin</Link>
            <button  className="btn btn-error">Logout</button>
          {/* </>
        ) : (
          <Link to="/auth" className="btn btn-primary">Login</Link>
        )} */}
      </div>
    </nav>
  );
}
export default Navbar;
