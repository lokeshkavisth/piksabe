"use client";

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import LanguageSelector from './LanguageSelector';

const SearchBar = ({ onSearch, initialQuery = '', languages }) => {
  const [query, setQuery] = useState(initialQuery);
  const [language, setLanguage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    onSearch({ query, language });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto">
      <div className="flex items-center w-full overflow-hidden rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
        <LanguageSelector 
          value={language} 
          onChange={(value) => setLanguage(value)} 
          options={languages}
          className="hidden md:block ml-2"
        />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images, videos, or illustrations..."
          className="flex-grow px-4 py-3 bg-transparent focus:outline-none text-gray-800 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
          aria-label="Search query"
        />
        
        <button
          type="submit"
          className="flex items-center justify-center h-full px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:from-pink-600 hover:to-violet-600 transition-colors"
          aria-label="Search"
        >
          <FiSearch className="w-5 h-5" />
          <span className="ml-2 font-medium">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar; 