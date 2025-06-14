# Sauce Demo E2E Testing Framework

This project contains end-to-end tests for the Sauce Demo website (https://www.saucedemo.com/) using Cypress with Cucumber BDD.

## Framework Structure
- **Page Object Model (POM)**: Located in `cypress/support/pages/`
- **Feature Files**: Located in `cypress/e2e/features/`
- **Step Definitions**: Located in `cypress/support/step_definitions/`
- **Test Data**: Located in `cypress/fixtures/`

## Features Implemented
1. **Login Functionality**
   - Valid user login
   - Invalid user login
   - Locked out user login

2. **Inventory Sorting**
   - Sort by price (low to high)
   - Sort by price (high to low)
   - Sort by name (A to Z)
   - Sort by name (Z to A)

## Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation
1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
```

## Running Tests
1. Open Cypress Test Runner:
```bash
npx cypress open
```

2. Run tests in headless mode:
```bash
npx cypress run
```

3. Run specific feature:
```bash
npx cypress run --spec "cypress/e2e/features/login.feature"
```

## CI/CD
The project uses GitHub Actions for continuous integration. Tests are automatically run on:
- Push to main branch
- Pull requests to main branch

## Project Structure
```
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── login.feature
│   │       └── inventory-sort.feature
│   ├── fixtures/
│   │   └── testData.json
│   └── support/
│       ├── pages/
│       │   ├── LoginPage.js
│       │   └── InventoryPage.js
│       └── step_definitions/
│           ├── login.steps.js
│           └── inventory-sort.steps.js
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress.config.js
└── package.json
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License. 