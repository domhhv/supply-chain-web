# Supply Chain Tracker Web App

This is the frontend for the Supply Chain Tracker application. It is built with React, Vite, and TypeScript, using HeroUI (formerly NextUI) for UI components, TailwindCSS for styling, and React Router for navigation. The app allows users to view a table of all supply chain items, search for a particular item's events, and fetch its last event via the backend API.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Running Locally](#running-locally)
5. [Project Structure](#project-structure)
6. [API Integration](#api-integration)
7. [Additional Tools](#additional-tools)
8. [Notes](#notes)

---

## Features

- **Item Listing:** Displays all supply chain items in a table with copy-paste functionality for item IDs.
- **Search Interface:** Users can search for an item by ID.
- **Last Event Lookup:** Each item row includes a button to fetch and display the last event.
- **Responsive Design:** Built with TailwindCSS to ensure a great experience on both desktop and mobile.
- **Clean UI Components:** Utilizes HeroUI components and Phosphor Icons for a modern look.
- **Routing:** Uses React Router to navigate between the home page and item detail pages.

---

## Tech Stack

- **Framework:** React (Vite + TypeScript)
- **UI Components:** HeroUI (NextUI), Phosphor Icons
- **Styling:** TailwindCSS
- **Routing:** React Router
- **CI/CD:** Configured with GitHub Actions for ESLint, Prettier, and TypeScript checks
- **Deployment:** Currently deployed to Vercel

---

## Installation

1. **Clone the Repository**

```bash
git clone https://github.com/domhhv/supply-chain-web.git
cd supply-chain-web
```

2. **Install Dependencies**

```bash
yarn install
```

---

## Running Locally

To run the app locally, use the following command:

```bash
yarn dev
```

This will start the Vite development server, and you can view the app in your browser at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

A folder structure for the project is the following:

```plaintext
- src/
  - components/         // Reusable UI components (e.g., ItemsTable)
  - pages/              // Page components (HomePage, ItemDetailPage)
  - services/           // API service layer (functions to interact with the backend)
  - App.tsx             // Main app component with routing
  - main.tsx            // Entry point with providers (HeroUI, etc.)
```

---

## API Integration

The app integrates with a backend REST API. For example, the API service functions are defined in `src/services/*.ts` and rely on `API_BASE_URL` global variable which should set in a `.env.development` file and point to the backend API URL.

A server-side application is required to handle the API requests. The API endpoints should include:

- **GET /supply-chain/items:** Fetches all items in the supply chain.
- **GET /supply-chain/items/:id/events:** Fetches a specific item's events by ID.
- **GET /supply-chain/items/:id/events/last:** Fetches the last event for a specific item.

The homepage fetches all items and displays them in a table (see the ItemsTable component), and each row includes a "Last Event" button to fetch details for that item. Search functionality is also available to fetch supply chain events by item ID.

A dedicated API has been created for this app and can be found [here](https://github.com/domhhv/supply-chain-api).

---

## Additional Tools

- **TailwindCSS:** Configured for responsive design. Global styles are in `src/index.css`.
- **HeroUI:** Imported on a per-component basis for flexibility.
- **React Router:** Used to navigate between the home page and item detail pages.
- **Phosphor Icons:** Used for icons in buttons and elsewhere.
- **Optional:** React Query can be integrated for efficient data fetching and caching if your app’s complexity grows.

---

## Notes

- **CI/CD:** Your GitHub Actions workflows ensure code quality and run checks on PRs.
- **Deployment:** Although deployments are managed by Vercel, an optional Dockerfile can be added if required.
- **Further Enhancements:** Consider adding UI for more CRUD interactions, modals for detailed event views or integrating a state management library if the app’s complexity increases.

---

Happy coding, and enjoy building your Supply Chain Tracker Web App! If you have any questions or suggestions, feel free to reach out to me.
