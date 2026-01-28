import { Outlet, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiHome, FiMenu, FiLogOut } from 'react-icons/fi';

const Sidebar = ({ onClickLink }: { onClickLink?: () => void }) => (
  <aside className="h-full p-3 space-y-1">
    <NavLink to="/app" className="sidebar-link" onClick={onClickLink}>
      <FiHome /> <span>Home</span>
    </NavLink>
    {/* Add more links */}
  </aside>
);

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Top bar (mobile & desktop) */}
      <header className="sticky top-0 z-20 bg-surface border-b border-border">
        <div className="container h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg border border-border" onClick={()=>setOpen(true)}>
              <FiMenu />
            </button>
            <span className="font-bold">YourApp</span>
          </div>
          <button className="btn-primary gap-2">
            <FiLogOut /> Logout
          </button>
        </div>
      </header>

      {/* Layout: sidebar (md+) + content */}
      <div className="container py-4 grid md:grid-cols-[16rem_1fr] gap-4">
        {/* Desktop sidebar */}
        <div className="hidden md:block card p-0">
          <Sidebar />
        </div>

        {/* Content */}
        <main className="card p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-30">
          <div className="absolute inset-0 bg-black/40" onClick={()=>setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 bg-surface shadow-xl p-3">
            <Sidebar onClickLink={()=>setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
