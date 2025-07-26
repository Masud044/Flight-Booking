import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiClient from '../../api/apiCient';

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Min 6 chars').required('Password is required'),
});

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const res = await apiClient.post('/auth/login', data);
      login(res.data.token);
      toast.success('Login successful!');
    } catch {
      toast.error('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-md mx-auto bg-base-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <input {...register('email')} placeholder="Email" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <input {...register('password')} type="password" placeholder="Password" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.password?.message}</p>

      <button className="btn btn-primary w-full">Login</button>
    </form>
  );
}
