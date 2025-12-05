# 🍽️ Bistro Boss Restaurant

A full-stack restaurant management web application built with React and Firebase, offering a seamless dining experience with online ordering, menu browsing, and user management features.

## 🌟 Live

**Live Site:** [https://bistro-boss-6694b.web.app/](https://bistro-boss-6694b.web.app/)

## 📋 Features

- **Menu Browsing**: View categorized food items with images, descriptions, and prices
- **User Authentication**: Secure login and registration system
- **Shopping Cart**: Add items to the cart and manage orders
- **Order Management**: Place orders and track order history
- **Admin Dashboard**: Manage menu items, users, and orders (Admin only)
- **Responsive Design**: Fully responsive across all devices
- **Payment Integration**: Secure online payment processing
- **User Profiles**: Personalized user dashboard and profile management

## 🛠️ Technologies Used

### Frontend
- **React.js** - Frontend library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **React Icons** - Icon library
- **Swiper.js** - Touch slider/carousel
- **React Helmet** - Document head management
- **React Hook Form** - Form validation and handling
- **React Tabs** - Tab component
- **Axios** - HTTP client

### Backend & Database
- **Firebase** - Backend as a Service (BaaS)
  - Firebase Authentication
  - Firebase Hosting
  - Cloud Firestore / Realtime Database
  - MongoDB
  - Express JS
  - NodeJS

### Payment
- **Stripe** / Payment Gateway Integration

### Additional Tools
- **React Query (TanStack Query)** - Data fetching and caching
- **LocalForage** - Offline storage

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Steps

1. **Clone the repository**
   ```bash
   git clone [https://github.com/Baizid-B/Restaurant-website.git]
   cd bistro-boss-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_PAYMENT_GATEWAY_KEY=your_payment_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This project is deployed on Firebase Hosting. To deploy:

```bash
npm run build
firebase login
firebase init
firebase deploy
```

## 📁 Project Structure

```
bistro-boss-restaurant/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── MenuItem/
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   ├── Menu/
│   │   ├── Shop/
│   │   ├── Dashboard/
│   │   └── ...
│   ├── hooks/
│   ├── contexts/
│   ├── firebase/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## 🔐 User Roles

### Regular User
- Browse menu
- Add items to cart
- Place orders
- View order history
- Manage profile

### Admin
- All user permissions
- Add/Edit/Delete menu items
- Manage all users
- View all orders
- Dashboard analytics


## 👨‍💻 Author

**Baizid Bostami**
- LinkedIn: [Your LinkedIn]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/baizid-bostami-36962b292/))
- Email: mdbaizidbostami196@gmail.com


## 📞 Support

For support, email mdbaizidbostami196@gmail.com or create an issue in this repository.

---

⭐ **If you like this project, please give it a star!** ⭐
