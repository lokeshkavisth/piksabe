// API Options
export const LANGUAGE_OPTIONS = [
  { value: "", label: "All Languages" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
  { value: "ru", label: "Russian" },
];

export const ORDER_OPTIONS = [
  { value: "popular", label: "Popular" },
  { value: "latest", label: "Latest" },
];

export const IMAGE_TYPE_OPTIONS = [
  { value: "all", label: "All Image Types" },
  { value: "photo", label: "Photos" },
  { value: "illustration", label: "Illustrations" },
  { value: "vector", label: "Vectors" },
];

export const ORIENTATION_OPTIONS = [
  { value: "all", label: "All Orientations" },
  { value: "horizontal", label: "Horizontal" },
  { value: "vertical", label: "Vertical" },
];

export const CATEGORY_OPTIONS = [
  { value: "all", label: "All Categories" },
  { value: "backgrounds", label: "Backgrounds" },
  { value: "fashion", label: "Fashion" },
  { value: "nature", label: "Nature" },
  { value: "science", label: "Science" },
  { value: "education", label: "Education" },
  { value: "feelings", label: "Feelings" },
  { value: "health", label: "Health" },
  { value: "people", label: "People" },
  { value: "religion", label: "Religion" },
  { value: "places", label: "Places" },
  { value: "animals", label: "Animals" },
  { value: "industry", label: "Industry" },
  { value: "computer", label: "Computer" },
  { value: "food", label: "Food" },
  { value: "sports", label: "Sports" },
  { value: "transportation", label: "Transportation" },
  { value: "travel", label: "Travel" },
  { value: "buildings", label: "Buildings" },
  { value: "business", label: "Business" },
  { value: "music", label: "Music" },
];

export const COLOR_OPTIONS = [
  { value: "all", label: "All Colors" },
  { value: "grayscale", label: "Grayscale" },
  { value: "transparent", label: "Transparent" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "turquoise", label: "Turquoise" },
  { value: "blue", label: "Blue" },
  { value: "lilac", label: "Lilac" },
  { value: "pink", label: "Pink" },
  { value: "white", label: "White" },
  { value: "gray", label: "Gray" },
  { value: "black", label: "Black" },
  { value: "brown", label: "Brown" },
];

export const SAFE_SEARCH_OPTIONS = [
  { value: "true", label: "Yes" },
  { value: "false", label: "No" },
];

export const PER_PAGE_OPTIONS = [
  { value: "20", label: "20" },
  { value: "40", label: "40" },
  { value: "60", label: "60" },
  { value: "80", label: "80" },
  { value: "100", label: "100" },
  { value: "200", label: "200" },
];

// Default filter values
export const DEFAULT_FILTERS = {
  query: "",
  language: "english",
  order: "popular",
  imageType: "all",
  orientation: "all",
  category: "all",
  color: "all",
  safeSearch: "true",
  perPage: "40",
};

// Layout configurations
export const MASONRY_BREAKPOINTS = {
  default: 4,
  1536: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1,
};
