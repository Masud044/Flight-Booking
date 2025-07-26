import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Flight name is required'),
  departure: yup.string().required('Departure location is required'),
  arrival: yup.string().required('Arrival location is required'),
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
});

export default function FlightForm({ onSubmit, defaultValues }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4 max-w-md mx-auto bg-base-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">{defaultValues ? 'Edit Flight' : 'Add Flight'}</h2>

      <input {...register('name')} placeholder="Flight Name" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      <input {...register('departure')} placeholder="Departure" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.departure?.message}</p>

      <input {...register('arrival')} placeholder="Arrival" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.arrival?.message}</p>

      <input {...register('date')} type="date" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.date?.message}</p>

      <input {...register('time')} type="time" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.time?.message}</p>

      <button className="btn btn-primary w-full">{defaultValues ? 'Update Flight' : 'Add Flight'}</button>
    </form>
  );
}
