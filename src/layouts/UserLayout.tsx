import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export function UserLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* User Navigation */}
      <nav className="bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6 py-3">
            <li>
              <a href="#" className="hover:text-blue-200">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-200">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
