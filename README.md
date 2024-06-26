# E-commerce Website Testing with Cypress

This repository contains end-to-end (E2E) tests for an e-commerce website written in Cypress using TypeScript. The goal is to ensure the functionality and reliability of key features of the website.

## Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Test Scenarios](#test-scenarios)
- [Running Tests](#running-tests)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KamilSznajdrowicz/cypress-ecommerce-task.git
   cd cypress-ecommerce-task
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Prerequisites

Make sure you have the following versions of Node.js and npm installed:

- **Node.js**: `>=18.17.1`
- **npm**: `>=9.6.7`

## Folder Structure

The folder structure of this project is as follows:

cypress-ecommerce-task/
│
├── cypress/
│ ├── e2e / tests / # Test cases
│ │ ├── CategoryPage.ts / # Product Search, Filter and Sorting tests
│ │ ├── ProductPage.ts / # Adding items to cart and validation tests
│ │ ├── RegistrationPage.ts / # Registration, login and one sample happy path tests
│ ├── fixtures / # Test data also with fake data from Faker library
│ ├── pageObjects / # Page Objects with functions for interacting with the application
│ └── support/ # Custom commands and support files
├── .gitignore # Files and directories to ignore in Git
├── cypress.config.ts # Cypress configuration
├── package.json, package-lock.json # Project metadata and scripts
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration

## Scripts

The following scripts are available in the `package.json` file:

- `npm run cypress-o` - Open the Cypress Test Runner.
- `npm run cypress-r` - run Cypress tests in headless mode via Chrome.

## Test Scenarios

This project includes tests for the following scenarios:

1. **User Registration and Login**:
   1.1. Ensure users can register and log in successfully.
   1.2. Ensure users can't register with invalid email address - Happy PATH
2. **Product Search and Filter**:
   2.1. Verify that users can search for and filter products.
   2.2. Verify that users can search for and sorting products.
3. **Adding Items to Cart**:
   3.1. Confirm that users can add searching item to their shopping cart.

## Running Tests

You can run tests in two ways:

1. **Interactive Mode**: This opens the Cypress Test Runner where you can see tests running in real-time.

   ```bash
   npm run cypress-o
   ```

2. **Headless Chrome Mode**: This runs the tests in the terminal and is useful for CI/CD pipelines.
   ```bash
   npm run cypress-r
   ```
