import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/apiClient';
import {  useNavigate } from 'react-router-dom';

const  LoginForm =()=> {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const res = await apiClient.post('/api/login', data);

    const token = res.data?.data?.token // extract nested token
    console.log('Login token:', res.data);

    if (!token) {
      toast.error('No token received from server.');
      return;
    }

    login(token); // Save it
    toast.success('Login successful!');
    navigate('/');
  } catch (err) {
    toast.error('Invalid credentials');
  }
};


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-4 max-w-md mx-auto bg-white rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email',
            },
          })}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Minimum 6 characters',
            },
          })}
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
export default LoginForm; 
