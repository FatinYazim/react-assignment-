import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: "/react-assignment-/",
      element: <Home />,
    },
    {
      path: "/react-assignment-/job/:id",
      element: <Job />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
