const FlightCard =({ flight, onEdit, onDelete })=> {
  // console.log(flight);
  return (
    <div className="card bg-blue-300 shadow-md p-4">
      <h2 className="text-xl font-bold">{flight.airline}</h2>
      <p><span className="font-medium  ">From:</span>  {flight.departure} → <span className="font-medium  ">To:</span>  {flight.arrival}</p>
      <p> <span className="font-medium  ">Date:</span>  {flight.date} | <span className="font-medium  ">Time:</span>  {flight.time}</p>
       <p><span className="font-medium  ">Destination:</span>  {flight.destination} | <span className="font-medium  ">Location:</span>  {flight.origin}  </p>
        
        <p className=""> <span className="font-medium  ">Price:</span>  {flight.price} | <span className="font-medium  ">Flight_Number:</span> {flight.flight_number} </p>
        <p>  </p>

      {onEdit && (
        <div className="mt-2 flex gap-2">
          <button className="btn btn-sm btn-primary" onClick={() => onEdit(flight._id)}>Edit</button>
          <button className="btn btn-sm btn-error" onClick={() => onDelete(flight.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
export default FlightCard;  
