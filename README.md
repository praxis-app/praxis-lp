# Praxis LP

Praxis LP is the landing page for the Praxis project. It is built with Next.js and Tailwind CSS.

## Installation and setup

Ensure that you have [Node.js](https://nodejs.org/en/download) v24.11.1 installed on your machine before proceeding.

```bash
# Install project dependencies
$ npm install

# Copy environment variables
$ cp .env.example .env
```

## Running the app

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view and interact with the UI.

## Docker

Install [Docker](https://docs.docker.com/engine/install) to use the following commands.

```bash
# Start app in a container
$ docker compose up -d

# Build and restart app after making changes
$ docker compose up -d --build
```
