# Front-End Web Developer Portfolio

A personal portfolio website showcasing my projects, skills, and experiences as a front-end web developer. This project includes a product list with a cart functionality, built using React, Tailwind CSS, Daisy UI, and React Icons.

## Table of Contents
- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Cypress Setup](#cypress-setup)
  - [Running Tests](#running-tests)
- [Project Demo](#project-demo)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Future Improvements](#future-improvements)

## Description

This project is a mock online store featuring a variety of desserts. Users can add items to their cart, adjust quantities, and confirm orders. The project demonstrates my skills in building interactive and responsive web applications.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- A code editor like VSCode

### Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
npm install
```

## Project Structure

```
├── public
│   ├── images/
│   └── ...
├── src
│   ├── assets
│   ├── component/
│   │   ├── context/
│   │   │   └── UserProvider.jsx
│   │   ├── AddToCart.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── ProductMapping.jsx
│   │   ├── ThankYou.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── utilities/
│   │   └── data.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── cypress/
│   ├── e2e/
│   │   └── spec.cy.js
│   ├── fixtures/
│   │   └── example.js
│   ├── support/
│   │   ├── commands.js
│   │   ├── components.js
│   │   ├── e2e.js
│   │   └── index.js
├── package-lock.json
├── package.json
├── postcss.config.json
├── tailwind.config.json
└── vite.config.json
```

## Features

- Responsive Design
- Interactive UI Components
- Product List with Cart Functionality
- Order Confirmation
- Increment and Decrement Product Quantities
- Total Price Calculation

## Usage

### Development Server

Start the development server:

```bash
npm start
```

### Building for Production

Build the app for production:

```bash
npm run build
```

## Technologies Used

- HTML
- CSS (Tailwind CSS, Daisy UI)
- JavaScript (React)
- React Router
- React Icons
- Cypress (for testing)
- Vercel (for deployment)

## Testing

### Cypress Setup

Cypress is used for end-to-end testing. To set up Cypress, follow these steps:

1. Install Cypress:

    ```bash
    npm install cypress --save-dev
    ```

2. Add Cypress to your project. Create a Cypress folder in the root directory:

    ```bash
    npx cypress open
    ```

3. Add the following scripts to your `package.json`:

    ```json
    "scripts": {
      "cypress:open": "cypress open",
      "cypress:run": "cypress run"
    }
    ```

### Running Tests

To open the Cypress Test Runner, run:

```bash
npm run cypress:open
```

To run all tests in headless mode, run:

```bash
npm run cypress:run
```

## Project Demo

Include a link to a live demo of the website.

[Live Demo](https://product-cart-list-learning-cypress.vercel.app)

## Screenshots

Add some screenshots to showcase the website.

![Home Page](https://your-screenshot-url.com/home.png)
![Product List](https://your-screenshot-url.com/product-list.png)

## Contact

Provide your contact information.

- Email: chukwuemerieclara@gmail.com
- LinkedIn: [Nnadozie Chukwuemerie Clara](https://www.linkedin.com/in/nnadozie-chukwuemerie-b65273274/)

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenAI's ChatGPT](https://openai.com/chatgpt) for providing guidance
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Daisy UI Documentation](https://daisyui.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Icons Documentation](https://react-icons.github.io/react-icons/)
- [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)

## Future Improvements

- Adding more animations
- Implementing a blog section
