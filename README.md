# Security System Builder

A responsive React application that allows users to build a custom home security system. The project follows a data-driven architecture and focuses on clean state management, synchronized UI updates, and a production-like shopping experience.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- Local Storage

---

## Features

### Product Builder

- Four-step accordion builder
- Responsive layout
- Product cards rendered from JSON data
- Camera variant selection
- Quantity steppers
- Live product selection

### Review Panel

- Live summary grouped by:
  - Cameras
  - Sensors
  - Accessories
  - Plan
- Quantity controls synchronized with the builder
- Automatic total calculation
- Compare-at price calculation
- Savings calculation

### Persistence

- "Save my system for later" implemented using Local Storage.
- Restores the user's saved camera configuration after refresh or future visits.

---

## State Management

The application uses React Context for global state management.

The most challenging part of this project was designing the camera state because every camera variant has its own independent quantity while the product card always edits only the currently selected variant.

The final solution stores each selected camera variant as its own object.

Example:

```ts
[
  {
    id: "cam-v4",
    variant: "white",
    quantity: 2,
  },
  {
    id: "cam-v4",
    variant: "black",
    quantity: 5,
  },
];
```

This structure makes it easy to:

- Track quantities independently for every variant.
- Render the review panel.
- Calculate totals.
- Synchronize quantity steppers.
- Persist and restore the configuration.

Separate UI state is used to remember the currently selected variant for every camera product.

---

## Data Architecture

Initially I considered storing product prices inside the application state.

After reviewing different approaches, I decided to keep all product information inside the JSON data source instead, while storing only the user's selections in React Context.

This follows the common architecture used in e-commerce applications where:

- Product information is the source of truth.
- Application state contains only user interactions.

This keeps the state lightweight and avoids duplicated data.

---

## AI Usage

AI was used as an engineering assistant throughout the project, including:

- Discussing state management architecture.
- Evaluating different implementation approaches.
- Reviewing design decisions.
- Building the initial UI structure.
- Brainstorming edge cases.

The responsive implementation, component architecture, state management, and overall application logic were implemented manually.

Every AI-generated suggestion was reviewed and adapted before being integrated into the project.

---

## Notes

The application implements all core requirements.

Minor differences include:

- A few small visual details are not perfectly pixel-perfect.
- Variant thumbnails are simplified.

These do not affect the functionality of the application.

---

## Running the Project

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Project Status

✅ Responsive layout

✅ Data-driven UI

✅ Dynamic state management

✅ Variant selection

✅ Independent variant quantities

✅ Live synchronized review panel

✅ Automatic totals

✅ Local Storage persistence

✅ Clean React Context architecture
