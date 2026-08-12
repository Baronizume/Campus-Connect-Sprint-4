\# Campus-Connect



Campus-Connect is a MERN-based campus event platform designed to help students discover and explore events happening on campus.



\## Sprint 4 — Project Scaffolding \& Development Environment Initialization



\### Project Overview



Campus-Connect provides a centralized platform where students can discover campus events such as technology programs, cultural events, sports activities, workshops, social events, and career seminars.



Sprint 4 focuses on setting up the development environment and creating the basic MERN project structure with separate frontend and backend applications.



\## Technologies Used



\### Frontend



\* React

\* Vite

\* JavaScript

\* CSS



\### Backend



\* Node.js

\* Express.js

\* CORS

\* Dotenv



\### Database



\* MongoDB



\### Development Tools



\* Visual Studio Code

\* npm

\* Git

\* GitHub

\* Google Chrome / Microsoft Edge



\## Project Structure



```text

Campus-Connect-Sprint-4/

│

├── client/

│   ├── public/

│   ├── src/

│   │   ├── assets/

│   │   ├── App.jsx

│   │   ├── App.css

│   │   ├── index.css

│   │   └── main.jsx

│   ├── package.json

│   └── vite.config.js

│

├── server/

│   ├── src/

│   │   ├── config/

│   │   │   └── database.js

│   │   ├── models/

│   │   │   └── Event.js

│   │   ├── routes/

│   │   │   └── events.routes.js

│   │   ├── app.js

│   │   └── server.js

│   ├── seed.js

│   └── package.json

│

├── .gitignore

└── README.md

```



\## Installation



Clone the repository:



```bash

git clone https://github.com/Baronizume/Campus-Connect-Sprint-4.git

```



Move into the project directory:



```bash

cd Campus-Connect-Sprint-4

```



\## Frontend Setup



Open a terminal and run:



```bash

cd client

npm install

npm run dev

```



The frontend will run at:



```text

http://localhost:5173

```



\## Backend Setup



Open another terminal and run:



```bash

cd server

npm install

node src/server.js

```



The backend will run on:



```text

http://localhost:5000

```



\## Database



Campus-Connect uses MongoDB for storing event information.



The backend connects to the local MongoDB server using environment variables.



The `.env` file is not included in GitHub for security reasons.



Example environment configuration:



```text

MONGO\_URI=mongodb://127.0.0.1:27017/campus\_connect

PORT=5000

```



\## API



\### Get All Events



```text

GET /api/events

```



Complete API URL:



```text

http://localhost:5000/api/events

```



The API returns the campus events stored in MongoDB.



\## Current Events



The application currently contains sample events including:



\* Tech Fest 2026

\* Cultural Night

\* Sports Meet

\* Coding Workshop

\* Freshers Party

\* Career Seminar



\## Features Implemented in Sprint 4



\* React frontend initialization

\* Express backend initialization

\* MongoDB database connection

\* Event API

\* Event model

\* Event routes

\* Campus event display

\* Event search

\* Frontend and backend separation

\* Organized project folder structure

\* Environment variable configuration

\* Git version control

\* GitHub repository setup



\## Running the Complete Application



Two terminals are required.



\### Terminal 1 — Backend



```bash

cd server

node src/server.js

```



Expected output:



```text

Campus-Connect server running on port 5000

MongoDB connected: 127.0.0.1

```



\### Terminal 2 — Frontend



```bash

cd client

npm run dev

```



Expected output:



```text

VITE ready

Local: http://localhost:5173/

```



Open the frontend in a browser:



```text

http://localhost:5173

```



\## Sprint 4 Outcome



At the end of Sprint 4, Campus-Connect has a fully initialized MERN project with separate frontend and backend applications, an organized project structure, required dependencies, a working MongoDB connection, and a synchronized GitHub repository.



The project is now ready for further feature development in the next sprint.



\## Repository



GitHub Repository:



https://github.com/Baronizume/Campus-Connect-Sprint-4



\## Team



\*\*Project:\*\* Campus-Connect

\*\*Sprint:\*\* 4

\*\*Sprint Title:\*\* Project Scaffolding \& Development Environment Initialization



