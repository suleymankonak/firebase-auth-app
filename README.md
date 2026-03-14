# Firebase Auth Connector 🚀

A modern, sleek, and secure authentication system built with **React**, **Vite**, and **Firebase**. This project demonstrates a production-ready authentication flow including Email/Password and Google Social Login.

## ✨ Features

- 🔐 **Dual Authentication Modes:** Seamlessly switch between Login and Register views.
- 🌐 **Social Auth:** One-click login with **Google Authentication**.
- ✅ **Real-time Validation:** Advanced form validation powered by **Formik** and **Yup**.
- 🔔 **Interactive Feedback:** Beautiful toast notifications for success and error states via **React-Toastify**.
- 📱 **Responsive Design:** Fully responsive UI that works across all devices.
- ⚡ **Lightning Fast:** Built on **Vite** for an optimized development and build experience.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Backend/Auth:** [Firebase](https://firebase.google.com/)
- **Form Management:** [Formik](https://formik.org/)
- **Schema Validation:** [Yup](https://github.com/jquense/yup)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn
- A Firebase Project

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/firebase-auth-connector.git
   cd firebase-auth-connector
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Firebase:**
   Create a `.env` file in the root directory (optional, or update `src/components/FirebaseMain.jsx` directly) with your Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── components/
│   ├── FirebaseMain.jsx    # Firebase initialization & config
│   ├── FormScreen.jsx      # Main Auth UI & Logic
│   └── YupMenu.jsx         # Validation schemas
├── css/
│   └── FormScreen.css      # Custom styling
├── App.jsx                 # Root component
└── main.jsx                # Entry point
```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---
Developed with ❤️ for the community.
