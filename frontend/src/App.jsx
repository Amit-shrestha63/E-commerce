
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "sonner";
import Profile from "./pages/Profile";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";


const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/*User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />

          {/* add route for login page  */}
        <Route path="login" element={<Login />} />

          {/* add route for register page */}
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          {/* Route for checkout */}
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={ <OrderConfirmationPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
