"use client";

import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFilter } from 'react-icons/fi';
import FilterDropdown from './FilterDropdown';

const FilterSection = ({ filters, onChange, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={toggleExpand}
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <FiFilter className="w-4 h-4" />
          <span className="font-medium">Filters</span>
          {isExpanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2 mb-4">
          {filters.map((filter) => (
            <FilterDropdown
              key={filter.id}
              id={filter.id}
              label={filter.label}
              value={filter.value}
              onChange={(value) => onChange(filter.id, value)}
              options={filter.options}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default FilterSection; 