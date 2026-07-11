import {
    LayoutDashboard,
    Smartphone,
    Network,
    CreditCard,
    Package,
    History,
    Shield,
    Settings
} from "lucide-react";

export const menuItems = [

    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard"
    },

    {
        title: "Devices",
        icon: Smartphone,
        path: "/devices"
    },

    {
        title: "Mesh Explorer",
        icon: Network,
        path: "/mesh"
    },

    {
        title: "Payments",
        icon: CreditCard,
        path: "/payments"
    },

    {
        title: "Packet Monitor",
        icon: Package,
        path: "/packets"
    },

    {
        title: "History",
        icon: History,
        path: "/history"
    },

    {
        title: "Encryption",
        icon: Shield,
        path: "/encryption"
    },

    {
        title: "Settings",
        icon: Settings,
        path: "/settings"
    }

];