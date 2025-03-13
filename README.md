# Piksabe

<p align="center">
  <img src="https://via.placeholder.com/150x150.png?text=Piksabe" alt="Piksabe Logo" width="150" height="150">
</p>

<p align="center">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-13.0-black?style=flat-square&logo=next.js" alt="Next.js"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS"></a>
  <a href="https://pixabay.com/"><img src="https://img.shields.io/badge/Powered_by-Pixabay_API-2EC66D?style=flat-square" alt="Pixabay API"></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License"></a>
</p>

<p align="center">
  A modern and responsive media search application built with Next.js that allows users to discover and download high-quality images using the Pixabay API.
</p>

![Piksabe demo](piksabe.gif)

## ✨ Features

- 🔍 **Powerful Search** - Find images using keywords, filters, and categories
- 🌈 **Dark Mode** - Support for both light and dark themes
- 🔄 **Infinite Scroll** - Seamlessly load more results as you browse
- 🖼️ **Image Details** - View detailed information about each image
- ⬇️ **Easy Downloads** - Download images in various resolutions with a single click
- 📱 **Fully Responsive** - Beautiful layouts on devices of all sizes
- ⚡ **Fast Performance** - Optimized for speed and user experience
- 🎨 **Modern UI** - Clean and intuitive interface using Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lokeshkavisth/piksabe.git
   cd piksabe
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with your Pixabay API key:

   ```
   NEXT_PUBLIC_PIKSABE_API_KEY=your_pixabay_api_key_here
   ```

   > 📝 Don't have an API key? [Create a free Pixabay account](https://pixabay.com/accounts/register/) to get one.

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 💻 Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-rendered applications
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Axios](https://axios-http.com/) - Promise based HTTP client
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon libraries
- [React Masonry CSS](https://www.npmjs.com/package/react-masonry-css) - CSS masonry layout implementation
- [File Saver](https://www.npmjs.com/package/file-saver) - Client-side file saving functionality

## 📖 How to Use

### Searching for Images

1. Enter keywords in the search bar at the top of the page
2. Select optional filters from the filter section:

   - Language
   - Sort by (Popular or Latest)
   - Image Type (Photos, Illustrations, or Vectors)
   - Orientation (Horizontal or Vertical)
   - Category
   - Color
   - Safe Search options
   - Results per page

3. Click the "Search" button or press Enter to view results

### Viewing and Downloading Images

1. Click on any image to open a modal with more details
2. In the modal, you can:

   - View image statistics
   - See all tags
   - Click "View Details" for a dedicated page with more information
   - Visit the original source on Pixabay
   - Download the image

3. On the image details page, you can:
   - See a larger preview of the image
   - View comprehensive information about the image
   - Download the image at full resolution
   - Visit the original source on Pixabay

## ⚙️ Configuration

The application is now built with a modular structure. You can customize various aspects of the application by modifying the following files:

- **Constants**: Update options in `src/utils/constants.js`

  - Language options
  - Order options
  - Image type options
  - Orientation options
  - Category options
  - Color options
  - Safe search options
  - Per page options
  - Default filters

- **Theme**: Modify the theme settings in `tailwind.config.js` and `src/app/globals.css`

- **API Interaction**: Customize API behavior in `src/hooks/usePixabayApi.js`

## 🛠️ Development

### Folder Structure

```
piksabe/
├── public/              # Static assets
├── src/                 # Source code
│   ├── app/             # Next.js app directory
│   │   ├── image/       # Image details page route
│   │   └── page.js      # Home page
│   ├── components/      # React components
│   │   ├── common/      # Common UI components
│   │   ├── layout/      # Layout components
│   │   ├── media/       # Media-related components
│   │   └── search/      # Search-related components
│   ├── hooks/           # Custom React hooks
│   └── utils/           # Utility functions and constants
├── .env.local           # Environment variables (create this)
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # Project documentation
```

### Component Architecture

The application follows a modular component architecture:

- **Layout Components**: Header, Footer, etc.
- **Search Components**: SearchBar, FilterSection, etc.
- **Media Components**: MediaGrid, MediaCard, MediaModal, etc.
- **Common Components**: ThemeToggle, etc.

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can contribute:

1. **Fork the Repository**: Click the Fork button at the top right of this page.

2. **Clone Your Fork**:

   ```bash
   git clone https://github.com/your-username/piksabe.git
   cd piksabe
   ```

3. **Create a Branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**: Implement your feature or bug fix.

5. **Test Your Changes**: Ensure your changes don't break any existing functionality.

6. **Commit Your Changes**:

   ```bash
   git commit -m "Add feature: your feature description"
   ```

7. **Push to GitHub**:

   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**: Open a PR from your fork to the main repository.

### Contribution Guidelines

- Follow the existing code style and naming conventions
- Write clear, descriptive commit messages
- Update documentation for any new features
- Add comments for complex logic
- Ensure your code is properly tested

## 🔮 Roadmap

- [ ] Add video search and preview functionality
- [ ] Implement user accounts for saving favorite images
- [ ] Add collections/boards for organizing saved media
- [ ] Integrate additional media APIs
- [ ] Add more filter options
- [ ] Implement advanced search features

## ❓ Troubleshooting

### Common Issues

- **API Key Issues**: Ensure your Pixabay API key is correct and properly set in the .env.local file.
- **Image Loading Problems**: Check your internet connection and browser console for errors.
- **Styling Issues**: Make sure you're using the latest version of Tailwind CSS.

If you encounter any other problems, please [open an issue](https://github.com/lokeshkavisth/piksabe/issues).

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author

**Lokesh Kavisth**

- Website: [Portfolio](https://lokeshkavisth.dev)
- GitHub: [@lokeshkavisth](https://github.com/lokeshkavisth)
- Twitter: [@lokeshkavisth](https://twitter.com/lokeshkavisth)
- Email: [lokeshkavisth.dev@gmail.com](mailto:lokeshkavisth.dev@gmail.com)

## 🙏 Acknowledgements

- [Pixabay](https://pixabay.com/) for providing the API
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- All the contributors and supporters of this project
