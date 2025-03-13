"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiDownload, FiEye, FiHeart } from 'react-icons/fi';

const MediaCard = ({ item, onClick, onDownload }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = (e) => {
    e.stopPropagation();
    onDownload(item);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="relative aspect-auto overflow-hidden bg-gray-100 dark:bg-gray-700">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        <Image
          src={item.webformatURL}
          alt={item.tags || 'Image'}
          width={item.webformatWidth}
          height={item.webformatHeight}
          className={`w-full h-auto object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={() => setIsLoading(false)}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2YwZjBmMCIgZD0iTTAgMGg1MDB2NTAwSDB6Ii8+PC9zdmc+"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <FiHeart className="w-4 h-4" />
                <span className="text-sm">{item.likes}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiEye className="w-4 h-4" />
                <span className="text-sm">{item.views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-3">
        <div className="mb-2 flex flex-wrap gap-1">
          {item.tags.split(',').slice(0, 5).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs border dark:border-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              {tag.trim()}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <Link 
            href={`/image/${item.id}`}
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <FiEye className="w-4 h-4 mr-1" />
            <span>View</span>
          </Link>
          
          <button
            onClick={handleDownload}
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center"
          >
            <FiDownload className="w-4 h-4 mr-1" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCard; 