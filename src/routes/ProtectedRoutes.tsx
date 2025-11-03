import { Outlet, Navigate } from "react-router-dom";
import UnauthorizedPage from "../pages/errors/UnauthorizedPage";
interface ProtectedRoutesProps {
  allowedRoles: string[];
}

export default function ProtectedRoutes({
  allowedRoles,
}: ProtectedRoutesProps) {
  const token = "ss";
  const role = "admin";

  if (!token || !role) {
    return <Navigate to={`/login`} replace />;
  }
  if (!allowedRoles.includes(role)) {
    return <UnauthorizedPage />;
  }
  return <Outlet />;
}
