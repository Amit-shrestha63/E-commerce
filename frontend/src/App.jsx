
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserLayout from "./components/Layout/UserLayout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { Toaster } from "sonner";
// import Profile from "./pages/Profile";
// import Checkout from "./components/Cart/Checkout";
// import OrderConfirmationPage from "./pages/OrderConfirmationPage";
// import MyOrdersPage from "./pages/MyOrdersPage";
// import OrderDetailsPage from "./pages/OrderDetailsPage"; // Fixed import statement

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster position="top-right" />
//       <Routes>
//         {/*User Layout */}
//         <Route path="/" element={<UserLayout />}>
//           <Route index element={<Home />} />

//           {/* add route for login page  */}
//         <Route path="login" element={<Login />} />

//           {/* add route for register page */}
//           <Route path="register" element={<Register />} />
//           <Route path="profile" element={<Profile />} />
//           {/* Route for checkout */}
//           <Route path="checkout" element={<Checkout />} />
//           <Route path="order-confirmation" element={ <OrderConfirmationPage />} />
//           <Route path="my-orders" element={<MyOrdersPage /> } />
//           <Route path="my-orders/:id" element={<OrderDetailsPage />} />


//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'sonner';
import Profile from './pages/Profile';
import Checkout from './components/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import MyOrdersPage from './pages/MyOrdersPage';
import OrderDetailsPage from './pages/OrderDetailsPage'; // Correct import
import AdminLayout from './components/Admin/AdminLayout'; // Import AdminLayout

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
          {/* Fix for dynamic order detail route */}
          <Route path="order/:id" element={<OrderDetailsPage />} />
          {/* Or if you want '/my-orders/:id', use the following */}
          {/* <Route path="my-orders/:id" element={<OrderDetailsPage />} /> */}
        </Route>
        <Route path="/admin" element={<AdminLayout />} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
