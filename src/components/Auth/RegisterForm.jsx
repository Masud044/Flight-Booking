import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/apiClient';

// Validation schema
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  gender: yup.string().required('Gender is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function RegisterForm() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await apiClient.post('/register', data); // <-- Call your API
      if (res.data.token) {
        login(res.data.token); // Save token to context
        toast.success('Registration successful!');
      } else {
        toast.success('User registered! Please login.');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-md mx-auto bg-base-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <input {...register('name')} placeholder="Full Name" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      <input {...register('email')} placeholder="Email" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <input {...register('phone')} placeholder="Phone Number" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.phone?.message}</p>

      <select {...register('gender')} className="select select-bordered w-full">
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <p className="text-red-500 text-sm">{errors.gender?.message}</p>

      <input {...register('password')} type="password" placeholder="Password" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.password?.message}</p>

      <button className="btn btn-primary w-full">Register</button>
    </form>
  );
}
