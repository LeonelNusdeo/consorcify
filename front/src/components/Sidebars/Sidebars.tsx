"use client";

// Estilos y componentes
import SideBarUser from "../SideBarUser/SideBarUser";
import SideBarAdmin from "../SidebarAdmin/SideBarAdmin";
import SidebarSuperAdmin from "../SidebarSuperAdmin/SidebarSuperAdmin";

// Interfaces
import { IUserData } from "@/Interfaces/user.interfaces";

// Hooks
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// -------------------

const Sidebars = () => {
    const [userData, setUserData] = useState<IUserData>();
    const pathname = usePathname();

    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            const { user } = JSON.parse(storedUserData);
            if (user) {
                setUserData(user);
            }
        }
    }, [pathname]);

    return (
        <div className="text-black">
            {(userData?.roles?.[0] == "cadmin" && <SideBarAdmin />) ||
                (userData?.roles?.[0] == "user" && <SideBarUser />) ||
                (userData?.roles?.[0] == "superadmin" && <SidebarSuperAdmin />)}
        </div>
    );
};

export default Sidebars;