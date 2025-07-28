import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/apiClient';
import { useNavigate } from 'react-router-dom';

const  RegisterForm=()=> {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data); // Debugging: Log the form data
    try {
      const res = await apiClient.post('/api/register', data);
      if (res.data?.data?.token) {
        console.log('Registration token:', res.data); // Debugging: Log the token
        login(res.data?.data?.token);
        toast.success('Registration successful!');
        navigate('/'); // Redirect to home after registration
      } else {
        toast.success('User registered! Please login.');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 max-w-md mx-auto bg-base-100 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-center">Register</h2>

       {/* Email */}
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email',
          },
        })}
        placeholder="Email"
        className="input input-bordered w-full"
      />
       {/* Password */}
      <input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        })}
        type="password"
        placeholder="Password"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.password?.message}</p>

      {/* Name */}
      <input
        {...register('name', { required: 'Name is required' })}
        placeholder="Full Name"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

     
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      {/* Phone */}
      <input
        {...register('phone', { required: 'Phone number is required' })}
        placeholder="Phone Number"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.phone?.message}</p>

      {/* Gender */}
      <select
        {...register('gender', { required: 'Gender is required' })}
        className="select select-bordered w-full"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <p className="text-red-500 text-sm">{errors.gender?.message}</p>

     

      <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
export default RegisterForm;
