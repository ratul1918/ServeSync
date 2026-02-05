import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import ResourcesPage from "./pages/ResourcesPage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
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
