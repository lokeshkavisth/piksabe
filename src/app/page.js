"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import Masonry from "react-masonry-css";

const IMAGE_RESOLUTIONS = {
  small: "640",
  medium: "1280",
  large: "1920",
  full: "all",
};

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  // Add more language options as needed
];

const ORDER_OPTIONS = [
  { value: "popular", label: "Popular" },
  { value: "latest", label: "Latest" },
];

const IMAGE_TYPE_OPTIONS = [
  { value: "all", label: "All" },
  { value: "photo", label: "Photos" },
  { value: "illustration", label: "Illustrations" },
  { value: "vector", label: "Vectors" },
];

const ORIENTATION_OPTIONS = [
  { value: "all", label: "All" },
  { value: "horizontal", label: "Horizontal" },
  { value: "vertical", label: "Vertical" },
];

const CATEGORY_OPTIONS = [
  { value: "", label: "All" },
  { value: "backgrounds", label: "Backgrounds" },
  { value: "fashion", label: "Fashion" },
  { value: "nature", label: "Nature" },
  { value: "science", label: "Science" },
  // Add more category options as needed
];

const COLOR_OPTIONS = [
  { value: "", label: "All" },
  { value: "grayscale", label: "Grayscale" },
  { value: "transparent", label: "Transparent" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  // Add more color options as needed
];

const SAFE_SEARCH_OPTIONS = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

const PER_PAGE_OPTIONS = [
  { value: "20", label: "20" },
  { value: "40", label: "40" },
  { value: "60", label: "60" },
  { value: "80", label: "80" },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function App() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");
  const [order, setOrder] = useState("");
  const [imageType, setImageType] = useState("");
  const [orientation, setOrientation] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [safeSearch, setSafeSearch] = useState("");
  const [perPage, setPerPage] = useState("");
  const [media, setMedia] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const API_KEY = process.env.NEXT_PUBLIC_PIKSABE_API_KEY;

  const fetchMedia = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&lang=${language}&order=${order}&image_type=${imageType}&orientation=${orientation}&category=${category}&colors=${color}&safesearch=${safeSearch}&per_page=${perPage}&page=${page}`
      );

      setMedia((prevMedia) => [...prevMedia, ...response.data.hits]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError("Failed to fetch media");
    }

    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      setError("Please enter a search query");
      return;
    }

    setMedia([]);
    setPage(1);
    fetchMedia();
  };

  // const handleDownload = (imageUrl) => {
  //   const downloadUrl = `full?resolution=${IMAGE_RESOLUTIONS[resolution]}`;
  //   window.open(downloadUrl, "_blank");
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pixabay Media Search</h1>
      <form onSubmit={handleSearch} className="mb-4 flex items-center">
        <div className="mr-4">
          <label htmlFor="language" className="mr-2">
            Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images or videos"
          className="p-2 border border-gray-300 rounded-md flex-grow"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 ml-2 rounded-full"
        >
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}

      {/* start */}

      <section className="flex items-center gap-5 justify-between">
        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="order" className="mr-2">
            Order
          </label>
          <select
            id="order"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            <option value="">Default</option>
            {ORDER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ///////////// */}

        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="image-type" className="mr-2">
            Type
          </label>
          <select
            id="image-type"
            value={imageType}
            onChange={(e) => setImageType(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {IMAGE_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ///////////// */}

        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="orientation" className="mr-2">
            Orientation
          </label>
          <select
            id="orientation"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {ORIENTATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ///////////// */}

        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="color" className="mr-2">
            Color
          </label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {COLOR_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {/* ////////////// */}
        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="safe-search" className="mr-2">
            Safe search
          </label>
          <select
            id="safe-search"
            value={safeSearch}
            onChange={(e) => setSafeSearch(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {SAFE_SEARCH_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ///////////// */}

        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="page-results" className="mr-2">
            Page results
          </label>
          <select
            id="page-results"
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {PER_PAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ///////////// */}

        <div className="mb-4 flex flex-col gap-1">
          <label htmlFor="category" className="mr-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full md:w-40"
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* ///////////// */}
      </section>

      {/* end  */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 mt-40"
        columnClassName="my-masonry-grid_column"
      >
        {media?.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer mb-4 shadow-md"
            onClick={() => window.open(item.pageURL, "_blank")}
          >
            {item.type === "photo" || "illustration" || "vector" ? (
              <img
                src={item.largeImageURL}
                alt={item.tags}
                className="mb-2 w-full rounded-md"
              />
            ) : (
              <video
                controls
                src={item.videos?.medium.url}
                className="mb-2 w-full"
              />
            )}
            <div>
              <p className="font-bold mb-2">
                {item.type === "photo" ? "Image" : "Video"}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="border bg-gray-100 text-gray-700 py-1 px-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <a
                  href={item.pageURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center rounded-full"
                >
                  <FaExternalLinkAlt className="mr-1" /> View Original Source
                </a>
                <button
                  onClick={() => handleDownload(item.largeImageURL)}
                  className="bg-blue-500 text-white py-2 px-4 text-xs flex items-center rounded-full"
                >
                  <FaDownload className="mr-1" /> Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      <div className="mx-auto text-center mt-3">
        {loading && <p className="text-center mt-4">Loading...</p>}
        {!loading && media.length > 0 && (
          <button
            className="bg-blue-500 text-white max-w-max py-2 px-4 mt-4 mx-auto rounded-full"
            onClick={fetchMedia}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
