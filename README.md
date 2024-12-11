# User Management API

This is a simple REST API for managing users. It supports operations like retrieving user data and adding new users.

## Introduction

This API is built using Node.js, Express, and SQLite. It provides basic CRUD functionality for managing user data.

## Prerequisites

- Node.js v14 or higher
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AbhiramiVV/Full-stack-Test.git
   npm install
   npm start



API Endpoints



GET /api/users


Description:

Fetch all users.
Request: No request body required.

Response:
json
[
  {
    "id": 1,
    "name": "Sample",
    "email": "sample@gmail.com"
  }
]




POST /api/users


Description: 

Add a new user.
Request:
json
{
  "name": "sample",
  "email": "sample@gmail.com"
}
Response:
json
{
  "id": 1
}


Edge Cases


GET /api/users:

If no users exist, return an empty array: [].


POST /api/users:

If name or email is missing, return:

json
{
  "error": "Name and email are required."
}
If the email is invalid, return:

json
{
  "error": "Invalid email format."
}

Test Cases


GET /api/users:

Verify response is an array.
Check response structure for each user.


POST /api/users:



Test with valid name and email.
Test with missing name or email.
Test with invalid email format.
