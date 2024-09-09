import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MyProfile from "../Pages/myProfile";
import Dashboard from "../Pages/dashboard";
import Orders from "../Pages/myOrders";
import Account from "../Pages/account";
import EditProfile from "../Pages/editProfile";
import ChangePassword from "../Pages/ChangePassword";
import Checkout from "../Pages/Checkout";
import Details from "../Pages/Details";

function Router_Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/myAccount" element={<MyProfile />}>
          <Route path="" element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="Orders" element={<Orders />}></Route>
          <Route path="Account" element={<Account />}></Route>
          <Route path="Profile" element={<EditProfile />}></Route>
          <Route path="changePassword" element={<ChangePassword />}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route
          path="/myAccount/dashboard/Orders/:id"
          element={<Details />}
        ></Route>
      </Routes>
    </>
  );
}

export default Router_Pages;
