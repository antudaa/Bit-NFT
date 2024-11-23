# BIT NFT - React + Node.js + Firebase + Tailwind + MongoDB

Welcome to the **BIT NFT** project! This repository contains the frontend and backend code for a modern single-page NFT collection platform. Built using cutting-edge web technologies like React, Node.js, and Tailwind, **BIT NFT** offers a seamless user experience for exploring, managing, and interacting with NFT collections, enhanced by secure authentication and user-friendly design.

## 🚀 Live Demo

- [Live Site](https://nft-collection-project.web.app/)

## 🖥️ Server Repository

- [Server Code](https://github.com/antudaa/Bit-NFT-Server)

---

## 🚀 Getting Started

Follow these steps to set up the project on your local environment.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/antudaa/Bit-NFT-Frontend.git
    cd BIT-NFT
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## 📂 Project Structure

The project is organized for scalability and maintainability:

- **Frontend**: React-based single-page application.
  - **src/components/**: Reusable React components.
  - **src/pages/**: Page components for various routes.
  - **src/hooks/**: Custom hooks for dynamic functionality.
  - **src/styles/**: Tailwind and DaisyUI styles for consistent theming.
  - **src/utils/**: Utility functions and helpers.
- **Backend**: Node.js API with MongoDB for database operations.
  - **routes/**: API endpoints for CRUD operations.
  - **models/**: MongoDB models and schemas.
  - **controllers/**: Business logic for API requests.
- **public/**: Static assets such as images and icons.

---

## 🌟 Features

### Frontend Features

- **NFT Collection Management**: Browse, add, and manage NFTs with CRUD operations.
- **Theming**: Switch between light and dark modes; DaisyUI themes available on large screens.
- **Dynamic Hooks**: Custom React hook dynamically displays page titles.
- **Animations**: Lottie and AOS for engaging transitions.

### Backend Features

- **Authentication**: Firebase authentication with email and Google login.
- **Secure Sign-Up**: Supports image uploads to ImageBB and stores user profiles in MongoDB.
- **Role-Based Access**: Membership requests, admin approvals, and secure dashboard access.
- **API Integration**: Dynamic blog fetching, posting, and review sections.

---

## 🌐 Deployment

Deploy the project using [Firebase](https://firebase.google.com/) for the frontend and [Vercel](https://vercel.com/) or similar platforms for the backend.

---

## 📘 Documentation

### Core Functionalities

1. **User Authentication**:
   - Firebase for secure login and sign-up.
   - Email, Google authentication, and role-based dashboard access.

2. **Membership Request**:
   - Users send requests after logging in.
   - Admin approves or denies requests via the dashboard.

3. **Dynamic Blogs**:
   - Blogs fetched from the database and displayed dynamically.
   - Members can write blogs, pending admin approval before publishing.

4. **Profile Management**:
   - Display user data and blog history dynamically in the profile section.

---

## 🛠️ Development

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run lint`: Run code quality checks with ESLint.
- `npm run preview`: Preview the production build locally.

### Standards

- Follow the Airbnb JavaScript style guide.
- Use Prettier for consistent code formatting.
- Write tests with Jest and React Testing Library for reliability.

---

## 🛡️ Security

- **Authentication**: Firebase with JWT for secure access.
- **Validation**: Comprehensive validation for inputs and requests.
- **Error Handling**: User-friendly error messages for all functionalities.

---

## 🤝 Contributing

Contributions are welcome! Please check the [contribution guidelines](CONTRIBUTING.md) for more information.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Developed with ❤️ by **Antu Das**.
