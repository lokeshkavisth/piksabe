"use client";

import axios from "axios";
import { useCallback, useState } from "react";

const usePixabayApi = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalHits, setTotalHits] = useState(0);

  const API_KEY = process.env.NEXT_PUBLIC_PIKSABE_API_KEY;

  const searchMedia = useCallback(
    async (searchParams, resetResults = true) => {
      setLoading(true);
      setError(null);

      const newPage = resetResults ? 1 : page;

      if (resetResults) {
        setMedia([]);
        setPage(1);
        setHasMore(true);
      }

      try {
        const params = new URLSearchParams({
          key: API_KEY,
          page: newPage,
          ...searchParams,
        });

        const response = await axios.get(
          `https://pixabay.com/api/?${params.toString()}`
        );

        const { hits, totalHits } = response.data;

        if (resetResults) {
          setMedia(hits);
        } else {
          setMedia((prevMedia) => [...prevMedia, ...hits]);
        }

        setTotalHits(totalHits);
        setPage(newPage + 1);
        setHasMore(hits.length > 0 && media.length + hits.length < totalHits);
      } catch (error) {
        setError(error.message || "Failed to fetch media");
      } finally {
        setLoading(false);
      }
    },
    [API_KEY, media.length, page]
  );

  const loadMore = useCallback(
    (searchParams) => {
      if (!loading && hasMore) {
        searchMedia(searchParams, false);
      }
    },
    [loading, hasMore, searchMedia]
  );

  return {
    media,
    loading,
    error,
    hasMore,
    totalHits,
    searchMedia,
    loadMore,
  };
};

export default usePixabayApi;
