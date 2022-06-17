import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../screens";
import DashboardRoutes from "./DashboardRoutes";
import PublicRoute from "./PublicRoute";
// import DashboardRoutes from "./DashboardRoutes";
// import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        /> */}
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/*"
          element={
            // <PrivateRoute>
            <DashboardRoutes />
            // </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
