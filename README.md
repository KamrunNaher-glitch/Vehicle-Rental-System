Project Description

The Vehicle Rental System API is a backend application built with Node.js, Express, TypeScript, and PostgreSQL.
It supports role-based authentication (Admin & Customer) and allows users to manage vehicles, bookings, and users securely.

This project is designed for academic and learning purposes, following RESTful API principles.
Features
🔐 Authentication & Authorization

JWT-based authentication

Role-based access control (admin, customer)

Secure protected routes using middleware

👤 User Management

Create users

View all users

View single user by ID

Update user (Admin can update anyone, Customer can update own profile)

Delete user (only if no active bookings)

🚘 Vehicle Management (Admin Only)

Add new vehicles

View all vehicles

View single vehicle

Update vehicle details

Delete vehicle (only if not booked)

📅 Booking Management

Create bookings (Admin & Customer)

View bookings (role-based filtering)

Cancel booking (Customer)

Mark booking as returned (Admin)
Technology Stack
Backend

Node.js

Express.js

TypeScript

Database

PostgreSQL

pg (node-postgres)

Authentication

JWT (JSON Web Token)

Tools

Postman (API testing)

dotenv (environment variables)