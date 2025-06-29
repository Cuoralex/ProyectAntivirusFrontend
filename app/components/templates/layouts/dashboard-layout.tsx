import {
  Home,
  Users,
  Briefcase,
  Building,
  Layers,
  ClipboardList,
  Network,
  FolderCog,
  Menu,
  X,
} from "lucide-react";
import { Link, Outlet, useLocation, useMatches } from "@remix-run/react";
import { useEffect, useState } from "react";
import HeaderDashboard from "~/components/organisms/header-dashboard";

function useCurrentUserEmail(): string | null {
  const matches = useMatches();
  const root = matches.find((m) => m.id === "root");
  const data = root?.data as { email?: string } | undefined;
  return data?.email ?? null;
}

interface User {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  role: string;
  birthdate: string;
  isActive: boolean;
}

export default function DashboardLayout() {
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const currentUserEmail = useCurrentUserEmail();
  const [firstName, setFirstName] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5055/api/v1/user", {
          credentials: "include",
        });
        const data: User[] = await res.json();
        const currentUser = data.find((u) => u.email === currentUserEmail);
        setFirstName(currentUser?.fullName.split(" ")[0] ?? null);
      } catch (err) {
        console.error("Error al cargar usuarios", err);
      }
    };

    fetchUsers();
  }, [currentUserEmail]);

  return (
    <div className="flex min-h-screen relative pt-16">
      <HeaderDashboard
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <button
        className="md:hidden p-4 fixed top-0 right-0 z-50"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <Menu size={28} className="text-gray-800" />
      </button>

      {sidebarOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              setSidebarOpen(false);
            }
          }}
        />
      )}

      <div
        className={`fixed z-40 top-0 left-0 h-screen w-72 bg-gray-900 text-white p-4 space-y-4 transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          <SidebarLinks isActive={isActive} />
        </nav>
      </div>

      <aside className="hidden md:block fixed h-screen w-72 pt-6 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <SidebarLinks isActive={isActive} />
        </nav>
      </aside>

      <main className="flex-1 p-6 w-full md:ml-72">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">
          Hola, {firstName ?? "Usuario"}
        </h1>
        <Outlet />
      </main>
    </div>
  );
}

function SidebarLinks({ isActive }: { isActive: (path: string) => boolean }) {
  const links = [
    { to: "/admin/index", icon: <Home size={20} />, label: "Inicio" },
    { to: "/admin/users", icon: <Users size={20} />, label: "Usuarios" },
    {
      to: "/admin/opportunities",
      icon: <Briefcase size={20} />,
      label: "Oportunidades",
    },
    {
      to: "/admin/institutions",
      icon: <Building size={20} />,
      label: "Instituciones",
    },
    { to: "/admin/services", icon: <Layers size={20} />, label: "Servicios" },
    {
      to: "/admin/service-types",
      icon: <ClipboardList size={20} />,
      label: "Tipos de Servicio",
    },
    {
      to: "/admin/opportunity-types",
      icon: <FolderCog size={20} />,
      label: "Tipos de Oportunidad",
    },
    { to: "/admin/sectors", icon: <Network size={20} />, label: "Sectores" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`p-2 rounded flex gap-2 items-center ${
            isActive(link.to)
              ? "bg-gray-800 font-semibold"
              : "hover:bg-gray-800"
          }`}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </>
  );
}
