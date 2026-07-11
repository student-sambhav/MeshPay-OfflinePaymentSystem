import { NavLink } from "react-router-dom";
import { menuItems } from "./menuItems";
import { motion } from "framer-motion";

export default function Sidebar() {

    return (

        <motion.aside

            initial={{ x: -80 }}
            animate={{ x: 0 }}

            className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col"

        >

            <div className="p-8">

                <h1 className="text-3xl font-bold">

                    <span className="text-blue-500">

                        Mesh

                    </span>

                    <span className="text-white">

                        Pay

                    </span>

                </h1>

                <p className="text-slate-400 text-sm mt-2">

                    Offline Payment Network

                </p>

            </div>

            <nav className="flex-1 px-4 space-y-2">

                {

                    menuItems.map((item) => {

                        const Icon = item.icon;

                        return (

                            <NavLink

                                key={item.path}

                                to={item.path}

                                className={({ isActive }) =>

                                    `flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300

                                    ${isActive

                                        ? "bg-blue-600 text-white shadow-lg"

                                        : "text-slate-300 hover:bg-slate-800"

                                    }`

                                }

                            >

                                <Icon size={20} />

                                <span>

                                    {item.title}

                                </span>

                            </NavLink>

                        );

                    })

                }

            </nav>

            <div className="p-6">

                <div className="rounded-xl bg-slate-800 p-4">

                    <p className="text-sm text-slate-400">

                        Mesh Status

                    </p>

                    <div className="flex items-center gap-2 mt-2">

                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>

                        <span className="text-green-400">

                            ONLINE

                        </span>

                    </div>

                </div>

            </div>

        </motion.aside>

    );

}