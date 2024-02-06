# Microservices Simulation Project

This project is a simple simulation of three microservices: a Logistics Service, a CRM Service, and an ERP Service, each developed with Node.js and Express, and orchestrated using Docker Compose. It's designed as a backend technical test to demonstrate basic microservices architecture.

## Prerequisites

Before you begin, ensure you have installed the following on your system:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/) (Optional for local testing without Docker)

## Getting Started

To get the project up and running on your local machine for development and testing purposes, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ITGlobers/microservices-simulation-for-backend-test.git
   cd microservices-simulation-for-backend-test
   ```

2. **Build and Run with Docker Compose**

   From the root directory of the project, run:

   ```bash
   docker-compose up --build
   ```

   This command builds the Docker images for each service and starts the containers.

3. **Accessing the Services**

   - Logistics Service: `http://localhost:3001`
   - CRM Service: `http://localhost:3002`
   - ERP Service: `http://localhost:3003`

   Access these URLs in your browser or API testing tool (like Postman) to interact with the services.

## Future Improvements

1. **Adopt TypeScript**: Migrate JavaScript code to TypeScript for better type safety and developer experience.

2. **Implement Code Formatting and Linting**: Integrate tools like Prettier and ESLint to enforce consistent code style and catch syntax and logic errors.

3. **Request Body Validation**: Implement validation for incoming request bodies to ensure data integrity and security.

4. **Implement Unit and Integration Tests**: Develop a testing suite using frameworks like Jest or Mocha for robust and reliable code.

5. **API Documentation**: Use tools like Swagger or Postman for comprehensive API documentation and easier testing.

## Support

For support, please open an issue in the GitHub repository.