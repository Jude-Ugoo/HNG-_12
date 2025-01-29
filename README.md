# Public API Project

This project is a simple public API built with NestJS that returns basic information in JSON format.

## Description

The API provides the following information:
- My registered email address (used to register on the HNG12 Slack workspace).
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Jude-Ugoo/HNG-_12.git
    cd HNG-_12
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Project Locally

1. Start the NestJS application:
    ```bash
    npm run start or npm run start:dev (To run in watch mode)
    ```

2. The API will be available at `http://localhost:7000`.

## API Documentation

### Endpoint URL

- `GET /`

### Request/Response Format

#### Request

- Method: `GET`
- URL: `/`

#### Response

- Status: `200 OK`
- Content-Type: `application/json`
- Body:
    ```json
    {
      "email": "ugonnaezeabara@gmail.com",
      "current_datetime": "2025-01-30T09:30:00Z",
      "github_url": "https://github.com/Jude-Ugoo/HNG-_12"
    }
    ```

### Example Usage

```bash
curl http://localhost:7000


Link
[HNG Node.js Developer Listing](https://hng.tech/hire/nodejs-developers)