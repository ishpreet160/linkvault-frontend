# LinkVault Frontend

React frontend for the LinkVault bookmark manager.

## Live
https://linkvault-frontend-git-main-ishpreet160s-projects.vercel.app/

## Tech Stack
- React + Vite
- Axios for API calls
- React Router for navigation

## Features
- Register and login with email and password
- Protected dashboard — redirects to login if no token
- Add bookmarks with URL and title
- Delete your own bookmarks
- Logout clears session

## How it connects to backend
Axios is configured with a base URL pointing to the Flask backend.
A request interceptor automatically attaches the JWT token from
localStorage to every API call. A response interceptor handles 401
errors by clearing localStorage and redirecting to login.
The Dashboard route is wrapped in a ProtectedRoute component that
checks for a valid token before rendering.

## Pages
- Login — authenticates user, saves token to localStorage
- Register — creates new account, redirects to login
- Dashboard — displays and manages bookmarks, protected route
