# Planning Poker App

A modern Planning Poker application built with React, TypeScript, and Vite. This app helps teams estimate story points collaboratively during sprint planning sessions.

## Features

- **Interactive Card Selection** - Choose from Fibonacci sequence cards (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕️)
- **Dark/Light Mode** - Toggle between themes with a draggable theme switcher
- **User Management** - Save your name locally for recognition

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd planning-poker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the App

1. **Start the development server**

   ```bash
   npm run dev
   ```

2. **Open your browser**

   The app will be available at `http://localhost:5173`

3. **Start planning!**
   - Enter your name in the login form
   - Select cards from the deck
   - Use the reveal feature to show picked card

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Headless UI** - Accessible UI components

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.tsx        # Individual poker card
│   ├── Button.tsx      # Button component
│   └── ThemeToggle.tsx # Draggable theme switcher
├── views/              # Page-level components
│   ├── LoginView.tsx   # User login/name entry
│   └── PlanningView.tsx # Main poker planning interface
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/            # Images and SVG files
```
