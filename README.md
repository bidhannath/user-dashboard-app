# User Dashboard App

## Description

The User Dashboard App is a comprehensive web application consisting of both frontend and backend components. This app is designed to offer a user-friendly dashboard experience, including features such as user authentication, profile management, and a dynamic user interface with dark and light themes. This also includes friendship feature where friend request can be sent and received and chat feature like any other social media. 

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Deployment](#deployment)
- [Installation and Local Development](#installation-and-local-development)
  - [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)
- [Demo](#demo)
- [Login Details for the Frontend](#login-details-for-the-frontend)
- [Contact](#contact)

## Features

- User registration and authentication system.
- User friendly UI with light and dark theme.
- User dashboard page show various stats.
- User profile page with update option.
- User friend request feature.
- Chat feature.

## Tech Stack

### Backend
- NodeJS 
- Express
- Typescript
- Firebase Authentication
- PostgreSQL
- Sequelize
- Docker

### Frontend
- NextJS 13
- Typescript
- Tailwind CSS
- Next Auth

## Deployment

- Frontend - Vercel
- Backend - Render

## Installation and Local Development

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/bidhannath/user-dashboard-app.git

2. Change the working directory:

    ```bash
    cd user-dashboard

### Backend

3. Navigate to the backend directory:

    ```bash
    cd backend

4. Add `env` file in the root directory of backend:

    ```bash
    NODE_ENV=development
    PORT=4000
    DB_USER=<value>
    DB_NAME=<value>
    DB_PASS=<value>
    DB_HOST=<value>
    FIREBASE_API_KEY=<value>
    FIREBASE_AUTH_DOMAIN=<value>
    FIREBASE_PROJECT_ID=<value>
    FIREBASE_SENDER_ID=<value>
    FIREBASE_APP_ID=<value>
    FIREBASE_PRIVATE_KEY=<value>
    FIREBASE_PRIVATE_KEY_ID=<value>

5. Install backend dependencies:

    ```bash
    npm install

    or

    ```bash
    yarn install

    or

    ```bash
    pnpm install

6. Start the development server:

    ```bash
    npm run dev

    or

    ```bash
    yarn dev

    or

    ```bash
    pnpm dev

### Frontend

7. Navigate to the frontend directory:

    ```bash
    cd frontend

8. Add `env` file in the root directory of frontend:

    ```bash
    NEXTAUTH_SECRET=<value>
    NEXT_PUBLIC_API_BASE_URL=<value>
    NEXT_PUBLIC_BASE_PATH=<value>

9. Install frontend dependencies:

    ```bash
    npm install

    or

    ```bash
    yarn install

    or

    ```bash
    pnpm install

10. Start the development server:

    ```bash
    npm run dev

    or

    ```bash
    yarn dev

    or

    ```bash
    pnpm dev

11. Visit `localhost:3000` in your browser.

## Usage

This app can be used as a browlerplate for any side project

## License

Distributed under the MIT License. See [LICENSE](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) for more information.

## Demo

Link - [https://user-dashboard-app-three.vercel.app/dashboard](https://user-dashboard-app-three.vercel.app/dashboard)

## Login Details for the Frontend

- Email: test@gmail.com
- Password: Test@12345

## Contact

Bidhan Nath - [bidhannath43@gmail.com](mailto:bidhannath43@gmail.com)
