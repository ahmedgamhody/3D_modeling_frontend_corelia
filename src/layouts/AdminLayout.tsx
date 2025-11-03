import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export function AdminLayout() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100">
        {/* Admin Sidebar */}
        <div className="fixed left-0 top-50 h-full w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Users
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64">
          {/* Admin Header */}
          <header className="bg-white shadow-sm p-4 border-b">
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          </header>

          {/* Page Content */}
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
