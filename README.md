# react.js-recipe-master
Softuni React.js Exam Project

Web application built using JavaScript and React. This app allows users to explore, create, edit or delete recipes with authentication and comment functionality included.

Features

- User authentication (register, login, logout)
- Create, edit, delete recipes (CRUD functionality)
- Comment recipes and delete comments
- Dynamic Home Page with latest recipes
- Dynamic Catalog view
- Responsive UI using a reworked template design
- Context API for global state management

Technologies Used

- React 19
- React Router
- JavaScript
- Context API
- Custom AI generated CSS
- Vite
- SoftUni Practice Server for backend


Getting Started

1. Clone the repo

git clone https://github.com/Aleksandar-Minchev/react.js-recipe-master.git

2. Start the Client

Open your **integrated terminal in VS Code**, navigate to the `client` folder, and run:
npm install
npm run dev

The React app should now be running at: `http://localhost:5173`

3. Start the Server

Open another **integrated terminal**, go to the `server` folder, and run:
node server.js

The backend should be running at: `http://localhost:3030`

---

Notes:

- The UI is based on a AI generated HTML/CSS template, heavily reworked with custom styling.
- You need to be logged in to create, edit, delete, or comment recipes.
- The backend is SoftUni Practice Server with manually persisted data in server.js
- You can use the following login credentials for testing:
  Email: admin@abv.bg
  Password: admin 


