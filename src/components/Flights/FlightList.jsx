import { useQuery } from 'react-query';

import FlightCard from './FlightCard';

import toast from 'react-hot-toast';
import apiClient from '../../api/apiClient';
import Loader from '../../../UI/Loader';

const FlightList =({ filters = {}, onEdit, onDelete })=> {
  const { data, isLoading, error } = useQuery(['flights', filters], async () => {
    const res = await apiClient.get('/api/flights', { params: filters });
    console.log(res.data.data.flights[0]);
    return res.data.data.flights;
    
  });
  
  

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
            key={flight._id}
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
export default FlightList;
