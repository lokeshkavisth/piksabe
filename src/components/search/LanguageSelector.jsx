import { FiGlobe } from 'react-icons/fi';

const LanguageSelector = ({ value, onChange, options, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center space-x-1 px-3">
        <FiGlobe className="text-gray-500 dark:text-gray-400 w-4 h-4" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="py-2 pr-8 pl-1 appearance-none bg-transparent border-none focus:ring-0 focus:outline-none text-sm text-gray-700 dark:text-gray-300 dark:bg-gray-800"
          aria-label="Select language"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LanguageSelector; 