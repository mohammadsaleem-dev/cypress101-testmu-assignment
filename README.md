# Cypress 101 Automation Assignment

## Author

Mohammad Sohail Saleem

## Overview

This repository contains automated UI tests developed using **Cypress** for the Selenium Playground website.
The project was created as part of the **TestMu AI Cypress 101 Certification Assignment**.

Target Website:
https://www.testmuai.com/selenium-playground/

---

## Tools & Technologies

* Cypress
* JavaScript
* Node.js
* LambdaTest Cloud Automation
* GitHub

---

## Test Scenarios

### 1. Drag & Drop Slider

**Objective:** Verify the slider value can be changed from **15 to 95**.

Steps:

1. Open Selenium Playground
2. Click **Drag & Drop Sliders**
3. Move the slider from 15 to 95
4. Validate the displayed value

Test File:

```
cypress/e2e/slider.cy.js
```

---

### 2. Input Form Submission

**Objective:** Validate successful form submission.

Steps:

1. Open Selenium Playground
2. Navigate to **Input Form Submit**
3. Fill in all required fields
4. Submit the form
5. Verify the success message

Test File:

```
cypress/e2e/form.cy.js
```

---

## Project Structure

```
cypress-101-assignment
│── form.cy.js
│── slider.cy.js
├── cypress.config.js
├── cypress.json
├── lambdatest-config.json
├── package.json
└── README.md
```

---

## Running Tests Locally

Install dependencies:

```
npm install
```

Open Cypress Test Runner:

```
npx cypress open
```

Run tests in headless mode:

```
npx cypress run
```

Cypress documentation:
https://docs.cypress.io/guides/overview/why-cypress

---

## Running Tests on LambdaTest

Install LambdaTest CLI:

```
npm install -g lambdatest-cypress-cli
```

Run the tests on LambdaTest cloud:

```
lambdatest-cypress run
```

LambdaTest documentation:
https://www.lambdatest.com/support/docs/run-cypress-tests-on-lambdatest/

---

## Test Environment

Tests were executed using LambdaTest cloud infrastructure with the following configurations:

* Chrome / Windows 10
* Firefox / Windows 10

---

## LinkedIn

https://www.linkedin.com/in/mohammad-saleem-7b977621a/

---

## License

This project is part of the **TestMu AI Cypress 101 Certification Assignment** and is intended for educational purposes.
