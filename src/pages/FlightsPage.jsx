import { useState } from 'react';
import FlightFilters from '../components/Flights/FlightFilters';
import FlightList from '../components/Flights/FlightList';

const FlightsPage=()=> {
  const [filters, setFilters] = useState({});
  

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Flights List</h1>
      <FlightFilters onFilterChange={setFilters} />
      <FlightList filters={filters} />
    </div>
  );
}
export default FlightsPage;
