import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    element: <ProtectedRoute />,
      children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
              children: [
          { index: true, element: <DashboardPage /> },
          { path: "orders", element: <div>Orders Page(Coming Soon)</div> },
      { path: "menu", element: <div>Menu Page(Coming Soon)</div> },
  { path: "staff", element: <div>Staff Manage(Coming Soon)</div> },
{ path: "settings", element: <div>Settings(Coming Soon) </div> },
              ]
          }
      ]
  },
{
  path: "/features",
    Component: FeaturesPage,
  },
{
  path: "/pricing",
    Component: PricingPage,
  },
{
  path: "/resources",
    Component: ResourcesPage,
  },
{
  path: "/about",
    Component: AboutPage,
  },
{
  path: "/signin",
    Component: SignInPage,
  },
{
  path: "/signup",
    Component: SignUpPage,
  },
]);
