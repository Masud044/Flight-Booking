import { useForm } from 'react-hook-form';

const FlightForm = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 space-y-4 max-w-md mx-auto bg-base-100 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-center">
        {defaultValues ? 'Edit Flight' : 'Add Flight'}
      </h2>

      {/* Flight Name */}
      <input
        {...register('name', { required: 'Flight name is required' })}
        placeholder="Flight Name"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.name?.message}</p>

      {/* Departure */}
      <input
        {...register('departure', { required: 'Departure location is required' })}
        placeholder="Departure"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.departure?.message}</p>

      {/* Arrival */}
      <input
        {...register('arrival', { required: 'Arrival location is required' })}
        placeholder="Arrival"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.arrival?.message}</p>

      {/* Date */}
      <input
        {...register('date', { required: 'Date is required' })}
        type="date"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.date?.message}</p>

      {/* Time */}
      <input
        {...register('time', { required: 'Time is required' })}
        type="time"
        className="input input-bordered w-full"
      />
      <p className="text-red-500 text-sm">{errors.time?.message}</p>

      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? defaultValues
            ? 'Updating...'
            : 'Adding...'
          : defaultValues
          ? 'Update Flight'
          : 'Add Flight'}
      </button>
    </form>
  );
};

export default FlightForm;
