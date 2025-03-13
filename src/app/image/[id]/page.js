"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import {
  FiArrowLeft,
  FiDownload,
  FiExternalLink,
  FiHeart,
  FiEye,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { downloadImage, formatNumber } from "@/utils/helpers";

export default function ImageDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageDetails = async () => {
      setLoading(true);
      try {
        const API_KEY = process.env.NEXT_PUBLIC_PIKSABE_API_KEY;
        const response = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&id=${params.id}`
        );

        if (response.data.hits && response.data.hits.length > 0) {
          setImage(response.data.hits[0]);
        } else {
          setError("Image not found");
        }
      } catch (err) {
        setError("Failed to fetch image details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchImageDetails();
    }
  }, [params.id]);

  const handleDownload = () => {
    if (image) {
      downloadImage(image.largeImageURL, `piksabe-${image.id}.jpg`);
    }
  };

  const goBack = () => {
    router.back();
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 text-red-800 dark:text-red-300">
          <p>{error}</p>
        </div>
      ) : image ? (
        <div className="max-w-5xl mx-auto">
          <button
            onClick={goBack}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
          >
            <FiArrowLeft className="mr-2" />
            Back to search results
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Large Image Preview */}
            <div className="relative w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
              <div className="relative max-h-[70vh] flex justify-center">
                <Image
                  src={image.largeImageURL}
                  alt={image.tags}
                  width={image.imageWidth}
                  height={image.imageHeight}
                  className="w-auto h-auto max-w-full max-h-[70vh] object-contain"
                  priority
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 p-4 border-t border-b border-gray-200 dark:border-gray-700">
              <a
                href={image.pageURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FiExternalLink className="w-4 h-4 mr-2" />
                View on Pixabay
              </a>

              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Download
              </button>
            </div>

            {/* Image Details */}
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Image Details
              </h1>

              <div className="space-y-6">
                {/* Image Stats */}
                <div className="flex flex-wrap justify-between gap-6">
                  <div className="flex items-center">
                    <FiUser className="w-5 h-5 mr-2 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      By {image.user}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiHeart className="w-5 h-5 mr-2 text-red-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {formatNumber(image.likes)} Likes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiEye className="w-5 h-5 mr-2 text-blue-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {formatNumber(image.views)} Views
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FiMessageSquare className="w-5 h-5 mr-2 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {formatNumber(image.comments)} Comments
                    </span>
                  </div>
                </div>

                {/* Image Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Details
                    </h2>
                    <ul className="space-y-2">
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Size:</span>{" "}
                        {image.imageWidth} x {image.imageHeight}
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Type:</span> {image.type}
                      </li>
                      <li className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">ID:</span> {image.id}
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Tags
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {image.tags.split(",").map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
