# Cypress Advanced Framework

## Overview

This is an advanced and scalable test automation framework generated by AI (Copilot) using Cypress and TypeScript. It demonstrates best practices in test automation, including the Page Object Model, GoF patterns, and OOD principles.

## Features

- Cypress with TypeScript
- Mochawesome reporting
- Layered architecture
- Page Object Model
- GoF patterns (Builder, Strategy)
- SOLID principles
- E2E and API tests
- Efficient data management
- Modern JS features (async/await, ESNext)
- Code quality

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Running Tests

To run the Cypress tests, use the following command:

```bash
npm test:e2e
```
```bash
npm test:api
```

## Generating Reports

### Mochawesome Report

1. **Merge JSON Reports**: Merge the individual JSON report files into a single JSON file:

    ```bash
    npm run mochawesome:merge
    ```

2. **Generate HTML Report**: Generate the final HTML report from the merged JSON file:

    ```bash
    npm run mochawesome:report
    ```

3. **Open HTML Report**: Open the generated HTML report by navigating to the `mochawesome-report` directory and opening the `report.html` file in your web browser.

## Project Structure

- `cypress/e2e/pages`: Page Object Model classes
- `cypress/e2e/specs`: Test specifications
- `cypress/e2e/fixtures`: Test data
- `cypress/e2e/support`: Custom commands and configuration
- `cypress/e2e/utils`: Utility classes
- `cypress/api/models`: Data models
- `cypress/api/builders`: Builder classes for constructing complex objects
- `cypress/api/services`: Service classes for making API requests
- `cypress/api/assertions`: Assertion classes for validating API responses
- `cypress/api/data`: Predefined test data

## Prompt

💡 Objective:
Create an advanced and scalable test automation framework using Cypress and TypeScript as a proof of concept (PoC) to demonstrate my 8+ years of test automation expertise.

🎯 Requirements:

- **Tech Stack**: Cypress (TypeScript), ESNext
- **Reporting**: Integrate Mochawesome as a reporting system with custom configurations for usability
- **Architecture**: Follow a layered architecture with best practices in automation
- **Test Design**:
  - Implement the Page Object Model (POM)
  - Use Gang of Four (GoF) patterns (Factory, Builder, Strategy, Decorator) for object creation and framework/test behavior explanation
  - Apply Object-Oriented Design (OOD) (interfaces, SOLID principles)
- **Test Coverage**:
  - Include End-to-End (E2E) and API tests and clearly separate them
  - Implement advanced real-world scenarios (e.g., multi-step form interactions, stateful API workflows) using any publicly available test URL
  - Ensure tests are reliable and pass consistently
- **Code Quality**:
  - Follow best practices in Cypress and modern test automation
  - Maintain clean code principles: KISS, DRY, SOLID
  - Avoid anti-patterns (e.g., magic strings)
- **Data Management**: Implement an efficient test data strategy
- **Modern JS Features**: Use async/await, latest ESNext features
- **Documentation**: Provide a detailed README explaining the framework structure and usage

🔹 Deliverables:

- A fully functional Cypress/TS test automation framework
- Well-structured, maintainable, and scalable codebase
- A self-explanatory and professional project to showcase my expertise

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.