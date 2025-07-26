import { useState } from 'react';
import SeatSelection from '../components/Booking/SeatSelection';
import BookingForm from '../components/Booking/BookingForm';
import toast from 'react-hot-toast';
import apiClient from '../api/apiClient';


export default function BookingPage() {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleBooking = async (bookingData) => {
    if (!selectedSeat) {
      toast.error('Please select a seat first.');
      return;
    }
    try {
      await apiClient.post('/bookings', bookingData);
      toast.success('Booking confirmed!');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Booking failed.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Book a Flight</h1>
      <SeatSelection selectedSeat={selectedSeat} setSelectedSeat={setSelectedSeat} />
      <BookingForm onSubmit={handleBooking} selectedSeat={selectedSeat} />
    </div>
  );
}
