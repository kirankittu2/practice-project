import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import "./Media-queries.css";
import Register from "./components/register/Register";
import PrivateRoute from "./components/private-route";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <PrivateRoute element={MainLayout} />,
    },
  ]);

  return (
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  );
}

function MainLayout() {
  return (
    <>
      <Sidebar />
      <Body />
    </>
  );
}

export default App;
