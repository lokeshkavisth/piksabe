import { saveAs } from 'file-saver';

/**
 * Downloads an image from the given URL
 * @param {string} url - The URL of the image to download
 * @param {string} [filename] - Optional filename for the downloaded image
 */
export const downloadImage = (url, filename) => {
  try {
    saveAs(url, filename || url.split('/').pop());
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};

/**
 * Formats a number with comma separators
 * @param {number} number - The number to format
 * @returns {string} The formatted number
 */
export const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

/**
 * Extracts a filename from a URL
 * @param {string} url - The URL to extract the filename from
 * @returns {string} The extracted filename
 */
export const getFilenameFromUrl = (url) => {
  return url.split('/').pop();
};

/**
 * Truncates text to a specified length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - The maximum length of the text
 * @returns {string} The truncated text
 */
export const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Debounces a function call
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce wait time in milliseconds
 * @returns {Function} The debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}; 