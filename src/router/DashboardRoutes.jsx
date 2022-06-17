import { Routes, Route, Navigate } from "react-router-dom";
import { CollaboratorScreen, DashboardScreen } from "../screens";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/inicio" element={<DashboardScreen />} />
      <Route path="/colaboradores" element={<CollaboratorScreen />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default DashboardRoutes;
