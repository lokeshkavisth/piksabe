<h1 align='center' style='color:hotpink'>Piksabe</h1>

A Nextjs app that allows users to search for images and videos using the Pixabay API. Users can enter a search query, apply filters, and browse through the search results. They can view the media, download the images, and visit the original sources. The app uses Tailwind CSS for styling and Axios for making API requests.

![Piksabe video demo](piksabe.gif)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [How to Use](#how-to-use)
- [How to Contribute](#how-to-contribute)
- [License](#license)
- [Contact](#contact)

## Features

- Search for images and videos based on a query
- Apply filters to narrow down the search results
- View images and play videos
- Download images with various resolutions
- Visit the original source of the media
- Infinite scroll to load more search results
- Responsive masonry grid layout

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/lokeshkavisth/piksabe.git
   ```

2. Navigate to the project directory:

   ```bash
   cd piksabe
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Obtain an API key from Pixabay by signing up for an account at [https://pixabay.com/accounts/register/](https://pixabay.com/accounts/register/). Once you have the API key, replace `'NEXT_PUBLIC_PIKSABE_API_KEY'` in the code with your actual API key.

5. Start the development server:

   ```bash
   npm dev or npm run dev
   ```

6. Open the app in your web browser at [http://localhost:3000](http://localhost:3000).

## Configuration

In the `piksabe\src\app\page.js` file, you can modify the following constants to customize the app:

- `API_KEY`: Replace `'NEXT_PUBLIC_PIKSABE_API_KEY'` with your actual Piksabe API key.
- `IMAGE_RESOLUTIONS`: Configure the available image resolutions for download.
- `LANGUAGE_OPTIONS`: Add or remove language options for the search language dropdown.
- `ORDER_OPTIONS`: Add or remove order options for the search results.
- `IMAGE_TYPE_OPTIONS`: Add or remove image type options for filtering the search results.
- `ORIENTATION_OPTIONS`: Add or remove orientation options for filtering the search results.
- `CATEGORY_OPTIONS`: Add or remove category options for filtering the search results.
- `COLOR_OPTIONS`: Add or remove color options for filtering the search results.
- `SAFE_SEARCH_OPTIONS`: Add or remove safe search options for filtering the search results.
- `PER_PAGE_OPTIONS`: Add or remove per page options for configuring the number of results shown per page.

## How to Use

1. Enter a search query in the search input field.
2. Optionally, apply filters such as language, order, image type, orientation, category, color, and safe search.
3. Click the "Search" button to retrieve the search results.
4. Scroll through the search results and click on an image or video to view it.
5. To download an image, click the "Download" button and select the desired resolution.
6. To visit the original source of the media, click the "View Original Source" link.

## How to Contribute

Contributions are welcome! Here's how you can contribute to the project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary modifications in your branch.
4. Commit and push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

The project is licensed under the [MIT License](LICENSE).

## Contact

- [Email:](mailto:lokeshkavisth.dev@gmail.com)
- [GitHub:](https://github.com/lokeshkavisth)
- [Twitter:](https://twitter.com/lokeshkavisth)

Feel free to contact me if you have any questions or suggestions for the project.

```

```
