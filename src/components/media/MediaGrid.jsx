import Masonry from 'react-masonry-css';
import MediaCard from './MediaCard';

const breakpointColumnsObj = {
  default: 4,
  1536: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1
};

const MediaGrid = ({ items, onItemClick, onDownload }) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 w-full text-center">
        <div className="max-w-lg">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No results found</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search or filter criteria to find what you&apos;re looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-full gap-4"
      columnClassName="space-y-4"
    >
      {items.map((item) => (
        <MediaCard
          key={item.id}
          item={item}
          onClick={() => onItemClick(item)}
          onDownload={() => onDownload(item)}
        />
      ))}
    </Masonry>
  );
};

export default MediaGrid; 