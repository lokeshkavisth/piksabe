"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FiDownload, FiExternalLink, FiEye, FiHeart, FiInfo, FiMessageSquare, FiUser, FiX } from 'react-icons/fi';

const MediaModal = ({ item, onClose, onDownload }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Disable scroll on body
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col"
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            Media Details
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={item.largeImageURL}
                alt={item.tags}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.split(',').map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Stats</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FiHeart className="w-4 h-4 mr-2 text-red-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.likes} Likes</span>
                    </div>
                    <div className="flex items-center">
                      <FiEye className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.views} Views</span>
                    </div>
                    <div className="flex items-center">
                      <FiMessageSquare className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.comments} Comments</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FiUser className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">By {item.user}</span>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Size: {item.imageWidth} x {item.imageHeight}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      Type: {item.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
          <Link
            href={`/image/${item.id}`}
            onClick={onClose}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <FiInfo className="w-4 h-4 mr-2" />
            View Details
          </Link>
          
          <a
            href={item.pageURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <FiExternalLink className="w-4 h-4 mr-2" />
            View on Pixabay
          </a>
          
          <button
            onClick={() => onDownload(item)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          >
            <FiDownload className="w-4 h-4 mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaModal; 