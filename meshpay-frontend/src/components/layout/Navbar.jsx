import { Bell, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400">
          Welcome to MeshPay
        </p>
      </div>

      <div className="flex items-center gap-5">

        <Bell
          size={22}
          className="cursor-pointer text-slate-300"
        />

        <Avatar>
          <AvatarFallback>
            SG
          </AvatarFallback>
        </Avatar>

        <button
          onClick={handleLogout}
          className="rounded-lg p-2 text-red-400 transition hover:bg-slate-800"
        >
          <LogOut />
        </button>

      </div>
    </header>
  );
}