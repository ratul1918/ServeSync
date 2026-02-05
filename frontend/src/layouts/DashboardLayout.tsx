// import React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <div className="w-px h-4 bg-border mx-2" />
                    <div className="font-semibold">Dashboard</div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
