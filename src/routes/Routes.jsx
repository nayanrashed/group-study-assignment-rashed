import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import CreateAssignment from '../Pages/createAssignment/CreateAssignment';
import AllAssignments from "../Pages/allAssignments/allAssignments";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/createAssignment",
        element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>,
      },
      {
        path: "/allAssignments",
        element: <AllAssignments></AllAssignments>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
