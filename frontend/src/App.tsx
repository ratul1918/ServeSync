import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { router } from "./routes";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
