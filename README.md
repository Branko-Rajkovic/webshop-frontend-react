# Webshop Frontend

This project is a frontend application for an e-commerce platform, built using React and Vite. It provides a responsive and dynamic user interface for browsing products, managing a shopping cart, and processing orders.

## Features

- **Product Listing**: Browse a variety of products with detailed information.
- **Shopping Cart**: Add, remove, and modify products in the cart.
- **Checkout Process**: Seamlessly proceed through the checkout with order summaries.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast builds and hot module replacement.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **ESLint**: Pluggable linting utility for JavaScript and JSX.
- **Framer Motion**: For smooth page transition

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Branko-Rajkovic/webshop-frontend-react.git
   cd webshop-frontend-react
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the Application

To start the development server with hot module replacement:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be located in the `dist` directory.

## Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable React components.
  - `pages/`: Page components corresponding to different routes.
- `public/`: Public assets that are served directly.
- `hooks/`: Custom hooks
- `store/`: Context with State
- `style/`: index.css, CSS (Tailwind CSS) stylesheet
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `vite.config.js`: Configuration file for Vite.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.
