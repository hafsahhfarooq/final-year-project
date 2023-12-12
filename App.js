import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import DashboardForm from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard/:user_id" element={<DashboardForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
