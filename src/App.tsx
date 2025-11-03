import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import AdminLayout from "./layouts/AdminLayout";
// import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/HomePage";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./pages/auth/Login";
import { Toaster } from "react-hot-toast";
import Register from "./pages/auth/Register";
import ShowModelPage from "./pages/ShowModelPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/models/:id" element={<ShowModelPage />} />

        {/* <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<div>Admin Dashboard</div>} />
            <Route path="users" element={<div>Users Management</div>} />
            <Route path="settings" element={<div>Admin Settings</div>} />
          </Route>
        </Route> */}

        {/* <Route element={<ProtectedRoutes allowedRoles={["user"]} />}>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<div>User Dashboard</div>} />
            <Route path="profile" element={<div>User Profile</div>} />
            <Route path="orders" element={<div>User Orders</div>} />
          </Route>
        </Route> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
