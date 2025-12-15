import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import AboutPage from "./routes/aboutPage/aboutPage";
import ContactPage from "./routes/contactPage/contactPage";
import AgentsPage from "./routes/agentsPage/agentsPage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ListPage from "./routes/listPage/ListPage";
import ProfilePage from "./routes/profilePage/profilePage";
import SinglePage from "./routes/singlePage/SinglePage";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/agents",
          element: <AgentsPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/property/:id",
          element: <SinglePage />
        }
      ]
    }
  ]);

  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;