import { useQuery } from 'react-query';

import FlightCard from './FlightCard';

import toast from 'react-hot-toast';
import apiClient from '../../api/apiClient';
import Loader from '../../../UI/Loader';

export default function FlightList({ filters = {}, onEdit, onDelete }) {
  const { data, isLoading, error } = useQuery(['flights', filters], async () => {
    const res = await apiClient.get('/flights', { params: filters });
    return res.data;
    
  });
  console.log(data)
  

  if (isLoading) return <Loader />;
  if (error) {
    toast.error('Failed to load flights');
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data?.length ? (
        data.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p>No flights found.</p>
      )}
    </div>
  );
}
