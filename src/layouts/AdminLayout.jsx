import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Package,
  LogOut
} from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col">
        
        {/* Logo */}
        <div className="px-6 py-5 text-2xl font-bold tracking-wide border-b border-slate-700">
          🛒 Admin
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          
          <NavItem to="/admin" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          
          <NavItem
            to="/admin/add-product"
            icon={<PlusCircle size={18} />}
            label="Add Product"
          />

          <NavItem
            to="/admin/products"
            icon={<Package size={18} />}
            label="Products"
            disabled
          />
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-slate-700">
          <button className="flex items-center gap-2 text-slate-300 hover:text-white transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">
        
        {/* TOP BAR */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-slate-800">
            Admin Panel
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

/* -------------------- */
/* Reusable Nav Item */
/* -------------------- */
const NavItem = ({ to, icon, label, disabled }) => {
  if (disabled) {
    return (
      <div className="flex items-center gap-3 px-4 py-2 rounded text-slate-500 cursor-not-allowed">
        {icon}
        {label}
      </div>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded transition ${
          isActive
            ? "bg-slate-700 text-white"
            : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
};

export default AdminLayout;
