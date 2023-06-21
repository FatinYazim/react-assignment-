import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: HOMEURL,
      element: <Home />,
    },
    {
      path:  HOMEURL +  "/job/:id",
      element: <Job />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
