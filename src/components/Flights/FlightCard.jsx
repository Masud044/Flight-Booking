const FlightCard =({ flight, onEdit, onDelete })=> {
  
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <h2 className="text-xl font-bold">{flight.name}</h2>
      <p>From: {flight.departure} → To: {flight.arrival}</p>
      <p>Date: {flight.date} | Time: {flight.time}</p>

      {onEdit && (
        <div className="mt-2 flex gap-2">
          <button className="btn btn-sm btn-warning" onClick={() => onEdit(flight)}>Edit</button>
          <button className="btn btn-sm btn-error" onClick={() => onDelete(flight.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
export default FlightCard;  
