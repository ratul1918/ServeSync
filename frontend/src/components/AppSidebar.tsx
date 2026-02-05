import { Home, ListOrdered, UtensilsCrossed, Settings, Users, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "./ui/sidebar";

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Orders",
        url: "/dashboard/orders",
        icon: ListOrdered,
    },
    {
        title: "Menu",
        url: "/dashboard/menu",
        icon: UtensilsCrossed,
    },
    {
        title: "Staff",
        url: "/dashboard/staff",
        icon: Users,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
];

export function AppSidebar() {
    const location = useLocation();
    const { logout, user } = useAuth();

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>ServeSync</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={location.pathname === item.url}
                                    >
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
                            {user?.email}
                        </div>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton onClick={logout}>
                            <LogOut />
                            <span>Sign Out</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
