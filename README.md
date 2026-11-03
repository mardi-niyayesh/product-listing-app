# Witchly Marketplace – Product Listing

A responsive product listing application built with **Next.js, React, TypeScript, and Tailwind CSS** as part of a Frontend Technical Assessment.

The application allows users to browse products, search by title, filter by category and price range, sort products, and manage their favorite items.

## Features

- **Product Listing:** Display products using reusable product cards.
- **Search:** Search products by title.
- **Category Filter:** Filter products by category.
- **Price Filter:** Filter products using minimum and maximum prices.
- **Sorting:** Sort products by price and rating in ascending or descending order.
- **Pagination:** Display 8 products per page.
- **Favorites:** Add and remove products from favorites.
- **Loading State:** Display a loading indicator while fetching products.
- **Error Handling:** Display error notifications using Sonner if product fetching fails.
- **Responsive Design:** Adapt the layout to different screen sizes.

## Tech Stack

- **Next.js 16** – React framework
- **React 19** – UI development
- **TypeScript** – Type safety
- **Tailwind CSS 4** – Styling
- **Axios** – HTTP requests
- **Sonner** – Toast notifications
- **Lucide React** – Icons
- **JSON Server** – Mock REST API
- **Cloudflare Workers** – Deployment platform

## Project Structure

```text
product-listing-app/
├── public/
│   ├── images/
│   │   └── product-placeholder.svg
│   └── _headers
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── features/
│       └── products/
│           ├── api/
│           │   └── products.api.ts
│           │
│           ├── components/
│           │   ├── CategoryFilter.tsx
│           │   ├── Pagination.tsx
│           │   ├── PriceFilter.tsx
│           │   ├── ProductCard.tsx
│           │   ├── ProductList.tsx
│           │   ├── SearchBar.tsx
│           │   └── SortFilter.tsx
│           │
│           ├── hooks/
│           │   ├── useProductFilter.ts
│           │   └── useProducts.ts
│           │
│           └── types/
│               └── product.types.ts
│
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd product-listing-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API

Product data is fetched from a mock REST API hosted on Render.

**API Base URL:**

```text
https://product-listing-app-jd72.onrender.com
```

**Products endpoint:**

```text
GET /products
```

Axios is used to send HTTP requests, while the `useProducts` hook manages the loading state and product data.

## Project Architecture

The project follows a feature-based folder structure.

- **API:** Handles communication with the products endpoint.
- **Hooks:** Contains product fetching and filtering logic.
- **Components:** Contains reusable UI components.
- **Types:** Defines TypeScript interfaces for product data.

This structure helps separate data fetching, business logic, and UI components, making the code easier to maintain and extend.

## Deployment

The project uses OpenNext for Cloudflare Workers deployment.

To build and preview the application:

```bash
npm run preview
```

To deploy the application:

```bash
npm run deploy
```

## Author

Frontend Developer

Built as part of the Witchly Marketplace Frontend Technical Assessment.