import { useEffect, useState } from 'react';
import SeatSelection from '../components/Booking/SeatSelection';
import BookingForm from '../components/Booking/BookingForm';
import toast from 'react-hot-toast';
import apiClient from '../api/apiClient';

const BookingPage = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [editingBooking, setEditingBooking] = useState(null);

  // Fetch existing bookings from backend
  const fetchBookings = async () => {
    try {
      const res = await apiClient.get('/api/bookings');
      console.log('Bookings fetched:', res.data);
      setBookings(res.data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Failed to load bookings.');
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // Submit form (create or update)
  const handleBooking = async (bookingData) => {
    if (!selectedSeat) {
      toast.error('Please select a seat.');
      return;
    }

    try {
      if (editingBooking) {
        // Update
        await apiClient.put(`/api/bookings/${editingBooking._id}`, bookingData);
        toast.success('Booking updated.');
      } else {
        // New booking
        await apiClient.post('/api/bookings', bookingData);
        toast.success('Booking confirmed!');
      }

      setSelectedSeat(null);
      setEditingBooking(null);
      fetchBookings(); // Refresh
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Booking failed.');
    }
  };

  // Delete a booking
  const handleDelete = async () => {
    if (!editingBooking) return;
    try {
      await apiClient.delete(`/api/bookings/${editingBooking._id}`);
      toast.success('Booking deleted.');
      setEditingBooking(null);
      setSelectedSeat(null);
      fetchBookings();
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error('Delete failed.');
    }
  };

  // Edit button click
  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setSelectedSeat(booking.seat);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Book a Flight</h1>

      {/* Seat Selection */}
      <SeatSelection
        selectedSeat={selectedSeat}
        setSelectedSeat={setSelectedSeat}
        bookedSeats={bookings.map((b) => b.seat)}
      />

      {/* Booking Form */}
      <BookingForm
        onSubmit={handleBooking}
        onDelete={handleDelete}
        selectedSeat={selectedSeat}
        defaultValues={editingBooking}
      />

      {/* Bookings List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Existing Bookings</h2>
        <ul className="space-y-2">
          {bookings.map((booking) => (
            <li
              key={booking._id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <strong>Seat {booking.seat}</strong> — {booking.passengerName} ({booking.email})
              </div>
              <button
                onClick={() => handleEdit(booking)}
                className="btn btn-sm btn-outline"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookingPage;
