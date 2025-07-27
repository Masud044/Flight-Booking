import { useForm } from 'react-hook-form';

const BookingForm = ({ onSubmit, selectedSeat }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit({ ...data, seat: selectedSeat }))}
      className="p-4 space-y-4 bg-base-100 shadow rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-center">Book Your Seat</h2>

      {/* Passenger Name */}
      <input
        {...register('passengerName', { required: 'Passenger name is required' })}
        placeholder="Passenger Name"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.passengerName?.message}</p>

      {/* Email */}
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email',
          },
        })}
        placeholder="Email Address"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Booking...' : 'Confirm Booking'}
      </button>
    </form>
  );
}
export default BookingForm;
