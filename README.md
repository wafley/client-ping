# Client Ping API

![Version](https://img.shields.io/github/v/release/wafley/client-ping)
![License](https://img.shields.io/github/license/wafley/client-ping)
![Issues](https://img.shields.io/github/issues/wafley/client-ping)
![Pull Requests](https://img.shields.io/github/issues-pr/wafley/client-ping)
![Last Commit](https://img.shields.io/github/last-commit/wafley/client-ping)
![Code Size](https://img.shields.io/github/languages/code-size/wafley/client-ping)
![Contributors](https://img.shields.io/github/contributors/wafley/client-ping)
[![Follow @wafley](https://img.shields.io/badge/Follow-%40wafley-blue?style=social&logo=github)](https://github.com/wafley)

A robust, TypeScript-based REST API built with Express.js that securely handles contact form submissions and directly integrates with Notion databases. Designed with Clean Architecture principles, strict request validation, and professional-grade logging.

## Features

- **TypeScript & Clean Architecture**: Organized, scalable, and maintainable codebase.
- **Notion SDK Integration**: Automatically creates new rows in a Notion database upon valid form submission.
- **Strict Validation**: Uses [Zod](https://zod.dev/) for precise and robust payload validation.
- **Professional Logging**: Configured with Winston (application logs) and Morgan (HTTP request logs) for comprehensive monitoring.
- **Developer Experience (DX)**: Hot-reloading with `nodemon` + `ts-node`, alongside strict ESLint and Prettier configurations.
- **Security & CORS**: Fully configured for secure third-party frontend access.

## Architecture & Folder Structure

```text
src/
├── config/        # Environment and middleware configurations (CORS)
├── controllers/   # Route handlers and HTTP logic
├── routes/        # Dynamic Express routers
├── services/      # Core business logic (Notion API integration)
├── types/         # TypeScript interfaces and Zod schemas
├── utils/         # Helper utilities (Validation middleware, Logger)
├── app.ts         # Express application setup
└── server.ts      # Server entry point
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- A Notion Integration Token (Create one at [Notion Developers](https://developers.notion.com/))
- A Notion Database with `Name` (title), `Email` (email), and `Message` (rich_text) properties. Make sure to **connect your integration** to the database.

## Installation & Setup

1. **Clone the repository** (or download the source):

    ```bash
    git clone https://github.com/wafley/client-ping.git
    cd client-ping
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in your details:
    ```bash
    cp .env.example .env
    ```
    **Required variables**:
    - `PORT`: (default: 3000)
    - `NOTION_TOKEN`: Your internal Notion integration secret.
    - `NOTION_DATABASE_ID`: The ID of your target Notion database.
    - `ALLOWED_ORIGINS`: Comma-separated list of allowed frontend domains (default is `*`).

## Usage

Start the development server with hot-reloading:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

### API Endpoints

#### `POST /api/contact`

Accepts a JSON payload to submit a contact form.

**Request Body:**

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello! I am interested in your services."
}
```

**Success Response (200 OK):**

```json
{
    "status": "success",
    "message": "Contact form submitted successfully"
}
```

**Validation Error (400 Bad Request):**

```json
{
    "status": "error",
    "message": "Validation failed",
    "errors": [
        {
            "path": "email",
            "message": "Invalid email address"
        }
    ]
}
```

## Available Scripts

- `npm run dev`: Starts the server in development mode using `nodemon`.
- `npm run build`: Compiles the TypeScript code to JavaScript in the `dist/` folder.
- `npm run start`: Runs the compiled production code.
- `npm run lint`: Analyzes the code using ESLint.
- `npm run format`: Formats all source files using Prettier.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code passes the linting and formatting checks (`npm run lint` and `npm run format`) before opening a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
