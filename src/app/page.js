"use client";

import MediaGrid from "@/components/media/MediaGrid";
import MediaModal from "@/components/media/MediaModal";
import FilterSection from "@/components/search/FilterSection";
import SearchBar from "@/components/search/SearchBar";
import usePixabayApi from "@/hooks/usePixabayApi";
import {
  CATEGORY_OPTIONS,
  COLOR_OPTIONS,
  DEFAULT_FILTERS,
  IMAGE_TYPE_OPTIONS,
  LANGUAGE_OPTIONS,
  ORDER_OPTIONS,
  ORIENTATION_OPTIONS,
  PER_PAGE_OPTIONS,
  SAFE_SEARCH_OPTIONS,
} from "@/utils/constants";
import { downloadImage } from "@/utils/helpers";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  // State for search and filters
  const [searchParams, setSearchParams] = useState({
    q: "",
    lang: DEFAULT_FILTERS.language,
    order: DEFAULT_FILTERS.order,
    image_type: DEFAULT_FILTERS.imageType,
    orientation: DEFAULT_FILTERS.orientation,
    category: DEFAULT_FILTERS.category,
    colors: DEFAULT_FILTERS.color,
    safesearch: DEFAULT_FILTERS.safeSearch,
    per_page: DEFAULT_FILTERS.perPage,
  });

  // State for selected media item
  const [selectedItem, setSelectedItem] = useState(null);

  // Custom hook for API operations
  const { media, loading, error, hasMore, totalHits, searchMedia, loadMore } =
    usePixabayApi();

  // Initial search on component mount
  useEffect(() => {
    searchMedia(searchParams);
  }, []);

  // Handle search submission
  const handleSearch = ({ query, language }) => {
    const newParams = {
      ...searchParams,
      q: query,
      lang: language || DEFAULT_FILTERS.language,
    };

    setSearchParams(newParams);
    searchMedia(newParams);
  };

  // Handle filter changes
  const handleFilterChange = (filterId, value) => {
    let newParams = { ...searchParams };

    switch (filterId) {
      case "order":
        newParams.order = value;
        break;
      case "imageType":
        newParams.image_type = value;
        break;
      case "orientation":
        newParams.orientation = value;
        break;
      case "category":
        newParams.category = value;
        break;
      case "color":
        newParams.colors = value;
        break;
      case "safeSearch":
        newParams.safesearch = value;
        break;
      case "perPage":
        newParams.per_page = value;
        break;
      default:
        break;
    }

    setSearchParams(newParams);
    searchMedia(newParams);
  };

  // Handle media item click
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Handle media download
  const handleDownload = (item) => {
    downloadImage(item.largeImageURL, `piksabe-${item.id}.jpg`);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  // Handle infinite scroll
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500 &&
      hasMore &&
      !loading
    ) {
      loadMore(searchParams);
    }
  }, [hasMore, loading, loadMore, searchParams]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prepare filters for the FilterSection component
  const filters = [
    {
      id: "order",
      label: "Sort By",
      value: searchParams.order,
      options: ORDER_OPTIONS,
    },
    {
      id: "imageType",
      label: "Image Type",
      value: searchParams.image_type,
      options: IMAGE_TYPE_OPTIONS,
    },
    {
      id: "orientation",
      label: "Orientation",
      value: searchParams.orientation,
      options: ORIENTATION_OPTIONS,
    },
    {
      id: "category",
      label: "Category",
      value: searchParams.category,
      options: CATEGORY_OPTIONS,
    },
    {
      id: "color",
      label: "Color",
      value: searchParams.colors,
      options: COLOR_OPTIONS,
    },
    {
      id: "safeSearch",
      label: "Safe Search",
      value: searchParams.safesearch,
      options: SAFE_SEARCH_OPTIONS,
    },
    {
      id: "perPage",
      label: "Results Per Page",
      value: searchParams.per_page,
      options: PER_PAGE_OPTIONS,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Piksabe Media Search
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Search millions of royalty-free images, illustrations, and videos
          </p>

          <SearchBar
            onSearch={handleSearch}
            initialQuery={searchParams.q}
            languages={LANGUAGE_OPTIONS}
          />
        </div>

        <FilterSection
          filters={filters}
          onChange={handleFilterChange}
          className="mb-8"
        />

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 text-red-800 dark:text-red-300">
            <p>{error}</p>
          </div>
        )}

        {loading && media.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {totalHits > 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Found {totalHits.toLocaleString()} results
              </p>
            )}

            <MediaGrid
              items={media}
              onItemClick={handleItemClick}
              onDownload={handleDownload}
            />

            {loading && media.length > 0 && (
              <div className="flex justify-center items-center h-24 mt-8">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
              </div>
            )}
          </>
        )}
      </main>

      {selectedItem && (
        <MediaModal
          item={selectedItem}
          onClose={handleCloseModal}
          onDownload={handleDownload}
        />
      )}
    </div>
  );
}
