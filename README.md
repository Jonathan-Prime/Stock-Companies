
# React Native Tutorial | Stock Tracking Companies

## Overview
This project demonstrates how to create and style components in React Native. It transforms JSON data into a visually appealing and user-friendly interface for tracking stock information.

## Features
- Display a list of stock information including name, symbol, price, and daily changes.
- Interactive user experience with gestures and animations.
- Data visualization using charts.
- Navigation with Expo Router.

## Technologies & Tools
- **React Native**: Core framework for building mobile apps.
- **Expo (v50)**: Simplifies development and testing across platforms.
- **React Native Gesture Handler**: Enhances gestures for touch-based interactions.
- **FlatLists**: Efficient rendering of stock lists.
- **FlexBox**: Layout management for styling.
- **React Native Gifted Charts**: Data visualization for stocks.
- **Expo Image**: Efficient image handling.

## Project Structure
```
.
├── .gitignore        # Specifies which files and folders to ignore in Git
├── README.md         # Project documentation
├── app.json          # Configuration file for the Expo application
├── babel.config.js   # Babel configuration file for transpiling code
├── expo-env.d.ts     # TypeScript types for environment variables
├── package-lock.json # Contains the exact versions of dependencies installed
├── package.json      # Configuration file for project dependencies and scripts
├── test.js           # Script for testing, potentially for development purposes
├── theme.ts          # Defines the app theme (e.g., colors, fonts)
├── tsconfig.json     # TypeScript configuration file for compilation settings
├── app/              # Contains the app logic and screens
│   ├── (tabs)        # Navigation tab structure
│   │   ├── _layout.tsx    # Layout for tab navigation
│   │   ├── index.tsx      # Main screen displaying content
│   │   ├── watchlist.tsx  # Screen for viewing the stock watchlist
│   ├── +html.tsx    # Handles HTML content rendering
│   ├── +not-found.tsx # Screen displayed for 404 pages
│   ├── [ticker].tsx # Detailed view for a specific stock
│   ├── _layout.tsx  # General layout for the app
│   ├── search.tsx   # Search screen for finding stocks
├── assets/           # Contains images and other media assets
│   ├── fonts        # Custom fonts used in the app
│   │   ├── SpaceMono-Regular.ttf # Space Mono font
│   ├── images       # Image assets for the app
│   │   ├── adaptive-icon.png  # Adaptive icon for the app
│   │   ├── favicon.png        # Favicon for the app
│   │   ├── icon.png           # Main app icon
│   │   ├── splash.png         # Splash screen image
├── components/       # Reusable components used throughout the app
│   ├── BarChart.tsx            # Component for displaying bar charts
│   ├── EditScreenInfo.tsx      # Example component for edit screen info
│   ├── ExternalLink.tsx        # Component for creating external links
│   ├── StockCard.tsx           # Card component for displaying stock details
│   ├── StyledText.tsx          # Component for styled text
│   ├── Themed.tsx              # Provides themed styling to other components
│   ├── __tests__               # Test files for components
│   │   ├── StyledText-test.js  # Unit test for StyledText component
│   ├── useClientOnlyValue.ts    # Hook for client-only values
│   ├── useClientOnlyValue.web.ts # Web-specific version of the hook
│   ├── useColorScheme.ts       # Hook for color scheme management
│   ├── useColorScheme.web.ts   # Web-specific version of the color scheme hook
├── constants/       # Contains constants for the app
│   ├── Colors.ts   # File defining the app's color palette
├── hooks/       # Hooks for the app
│   ├── useFilter.tsx   # Filtering stock
├── data.tsx         # JSON data for stock information
└── utils/           # Utility functions and helpers
    ├── formatCurrency.ts # Function for formatting currency values
    ├── searchStocks.ts   # Function for searching stocks based on criteria
```

## Installation
1. **Clone the Repository:**
   ```bash
   git clone
   cd react-native-project
   ```

2. **Install Dependencies:**
   Make sure you have `npm` or `yarn` installed, then run:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Expo Server:**
   ```bash
   npx expo start
   ```

4. **Run the App:**
   - Use the Expo Go app to scan the QR code on your physical device.
   - Alternatively, launch the app on an emulator.

## What You'll Learn
- How to handle JSON data in React Native.
- Styling components effectively using FlexBox.
- Using libraries like `React Native Gesture Handler` and `Gifted Charts`.
- Implementing navigation with Expo Router.

## Future Enhancements
- Add offline support for the stock data.
- Implement advanced sorting and filtering options.
- Integrate real-time data from a stock API.

## Acknowledgements
- **React Native Documentation** for guidance on building and styling.
- **Expo Documentation** for simplifying development.

---

**Note:** This project uses version 50 of Expo, and future updates may bring changes to some of the dependencies or APIs.
