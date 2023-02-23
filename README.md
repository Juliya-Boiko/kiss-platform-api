# 🗄 https://kiss-platform-api.onrender.com

KISS-PLATFORM-API - backend pet-progect for another pet-progect(task-manager KISS-PLATFORM) - for creating, saving and updating youre tasks.

Using:

- SENDGRID - for updating password in case you forgot;
- BCRYPT - for hashing passwords;
- JWT - for creating tokens (expiresIn: 3h);
- GRAVATAR - for generating custom user avatar
- MONGOOSE - for working with MongoDB
- CORS - for http-headers
- EXPRESS - for working with Node
- DOTENV - for loading environment variables from a .env file
- JOI - for validation data
- HTTP-ERRORS - for creating custom errors

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 📍 AUTH endpoint: /auth

- 📎 POST /signup - register user
- 📎 POST /login - login user
- 📎 POST /verify - send verification code to email
- 📎 POST /current - get current user info
- 📎 POST /update/:id - update forgotten password
- 📎 POST /logout - logout user

## 📍 TASKS endpoint (! PROTECTED authentication !) : /tasks

- 📎 GET / - get all user tasks
- 📎 POST / - add new task
- 📎 PUT /:id - update existing task
- 📎 DELETE /:id - delete task
