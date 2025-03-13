import Link from 'next/link';
import ThemeToggle from '../common/ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Piksabe
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <a 
            href="https://pixabay.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Powered by Pixabay
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 