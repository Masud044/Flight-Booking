import { useState } from 'react';

const FlightFilters =({ onFilterChange })=> {
  const [filters, setFilters] = useState({ name: '', date: '', location: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <input
        name="name"
        placeholder="Search by flight name"
        className="input input-bordered"
        onChange={handleChange}
      />
      <input
        name="location"
        placeholder="Search by location"
        className="input input-bordered"
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        className="input input-bordered"
        onChange={handleChange}
      />
    </div>
  );
}
export default FlightFilters;
