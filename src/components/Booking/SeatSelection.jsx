import { useCountdown } from "../../hooks/useCountdown";

const SeatSelection = ({ seats = 20, selectedSeat, setSelectedSeat, bookedSeats = [] }) => {
  const { time, resetCountdown } = useCountdown(120);
  const seatArray = Array.from({ length: seats }, (_, i) => i + 1);

  const handleSeatSelect = (seat) => {
    if (!bookedSeats.includes(seat)) {
      setSelectedSeat(seat);
      resetCountdown();
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">
        Time left to confirm booking: <span className="text-red-600">{time}s</span>
      </h3>
      <div className="grid grid-cols-5 gap-2">
        {seatArray.map((seat) => (
          <button
            key={seat}
            onClick={() => handleSeatSelect(seat)}
            disabled={bookedSeats.includes(seat)}
            className={`btn btn-sm ${
              selectedSeat === seat ? 'btn-primary' : 'btn-outline'
            }`}
          >
            Seat {seat}
          </button>
        ))}
      </div>
    </div>
  );
};
export default SeatSelection;
