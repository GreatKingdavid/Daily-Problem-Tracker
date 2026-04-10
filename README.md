
# Daily Problem Tracker API

A RESTful API to log daily challenges: what went wrong, its current state, and the solution discovered.

## Features

- Full CRUD operations (Create, Read, Update, Delete)
- In-memory array storage (simple, no database setup)
- Track problems with context, status, and resolution
- Clean REST API structure

## Tech Stack

- Node.js
- Express.js
- In-memory storage (array)

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /problems | Get all problems |
| GET | /problems/:id | Get one problem |
| POST | /problems | Create new problem |
| PUT | /problems/:id | Update problem |
| DELETE | /problems/:id | Delete problem |

## Example Request (POST)

Quick Start
git clone https://github.com/GreatKingdavid/Daily-Problem-Tracker
cd Daily-Problem-Tracker
npm install
node server.js

Server runs on http://localhost:3000

Design Note

This API intentionally uses in-memory array storage (no database) for simplicity and zero setup. For a production version, I would replace the array with MongoDB or PostgreSQL.

Connect

Telegram: @DavidBuild1 • Email: okwordavid1@gmail.com

```bash
curl -X POST http://localhost:3000/problems \
  -H "Content-Type: application/json" \
  -d '{"issue":"Database connection failed","context":"Production environment","solution":"Restarted MongoDB service"}'
