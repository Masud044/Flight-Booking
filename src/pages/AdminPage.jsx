import { useState } from 'react';
import FlightList from '../components/Flights/FlightList';
import FlightForm from '../components/Flights/FlightForm';
import toast from 'react-hot-toast';
import apiClient from '../api/apiClient';


const AdminPage =()=> {
  const [editingFlight, setEditingFlight] = useState(null);

  const handleAddFlight = async (data) => {
    try {
      if (editingFlight) {
        await apiClient.put(`/flights/${editingFlight.id}`, data);
        toast.success('Flight updated!');
        setEditingFlight(null);
      } else {
        await apiClient.post('/flights', data);
        toast.success('Flight added!');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to save flight.');
    }
  };

  const handleDeleteFlight = async (id) => {
    try {
      await apiClient.delete(`/flights/${id}`);
      toast.success('Flight deleted.');
    } catch {
      toast.error('Failed to delete flight.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin – Manage Flights</h1>
      <FlightForm onSubmit={handleAddFlight} defaultValues={editingFlight} />
      <div className="mt-6">
        <FlightList
          onEdit={(flight) => setEditingFlight(flight)}
          onDelete={handleDeleteFlight}
        />
      </div>
    </div>
  );
}
export default AdminPage;
