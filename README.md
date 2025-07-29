# Customer-Support

Ticket Support System – Customer Support Page

A full-stack web application built using the MERN stack to handle customer service workflows, including warranty registrations, claims, stock inquiries, and centralized support services for a music system product company.

Project Overview

The Ticket Support System is designed to streamline and centralize customer support operations. It enables users to register their products, submit warranty claims, check stock availability, and access self-help resources. Each interaction is recorded as a "ticket" for efficient tracking and resolution.

Objectives

- Provide a unified customer support portal for a music system product company
- Simplify warranty registration and claims
- Enable real-time stock inquiry
- Centralize FAQs, troubleshooting guides, and contact options
- Support administrative tracking and efficient ticket resolution
- Ensure scalability and maintainability for growing customer base

Tech Stack

- Frontend- React.js, HTML, CSS, Bootstrap
- Backend- Node.js, Express.js
- Database- MongoDB (Mongoose for schema modeling)
- Auth & Security- JWT, bcrypt.js, Passport.js
- Email Services- Nodemailer
- State Management- React State, Redux

Key Features

- Warranty Registration: Users can register products by entering serial numbers and purchase details.
- Warranty Claims: Guided process to submit warranty service requests with required documents.
- Stock Inquiry: Check real-time product availability with notification support.
- Support Centre: Centralized access to FAQs, manuals, and support contact options.
- Ticket Tracking: All interactions are logged and managed as support tickets.
- Admin Dashboard: Admin can manage tickets, claims, and registered products.
- Secure Auth: Protected user sessions using JWT and Passport.js.
- Email Notifications: Integrated with Nodemailer for claim confirmations and updates.

Live Demo

Access the deployed application here:  
 [https://customer-support-1.onrender.com]

How to run locally

1. Clone the repository
   git clone https://github.com/Harini-2202-S/Customer-Support.git
   cd customer-support

2. Install Dependencies
   npm install

3. Create a .env File
   In the root of your project, create a .env file and add the following environment:

   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

4. Run the Server
   node index.js

5. The server will run on http://localhost:5000 by default.
