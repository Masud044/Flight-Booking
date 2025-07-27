import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const BookingForm = ({ onSubmit, selectedSeat, defaultValues, onDelete }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset(defaultValues || {});
  }, [defaultValues, reset]);

  const isEditing = !!defaultValues;

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit({ ...data, seat: selectedSeat }))}
      className="p-4 space-y-4 bg-base-100 shadow rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-center">
        {isEditing ? 'Update Booking' : 'Book Your Seat'}
      </h2>

      <input
        {...register('passengerName', { required: 'Passenger name is required' })}
        placeholder="Passenger Name"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.passengerName?.message}</p>

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

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary w-full">
          {isEditing ? 'Update' : 'Confirm Booking'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={onDelete}
            className="btn btn-error w-full"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
