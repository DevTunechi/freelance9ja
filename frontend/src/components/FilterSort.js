// src/components/FilterSort.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const FilterSort = ({ items }) => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.category.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort === 'asc') return a.name.localeCompare(b.name);
    if (sort === 'desc') return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div className="max-w-md mx-auto my-6">
      <div className="mb-4">
        <label htmlFor="filter" className="block text-gray-700">Filter by Category</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Enter category"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sort" className="block text-gray-700">Sort by Name</label>
        <select
          id="sort"
          value={sort}
          onChange={handleSortChange}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Select...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <li key={item.id} className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">Category: {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSort;
