import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  passengerName: yup.string().required('Passenger name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

export default function BookingForm({ onSubmit, selectedSeat }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => onSubmit({ ...data, seat: selectedSeat }))} className="p-4 space-y-4 bg-base-100 shadow rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center">Book Your Seat</h2>

      <input {...register('passengerName')} placeholder="Passenger Name" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.passengerName?.message}</p>

      <input {...register('email')} placeholder="Email Address" className="input input-bordered w-full" />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <button className="btn btn-primary w-full">Confirm Booking</button>
    </form>
  );
}
