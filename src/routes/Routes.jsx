import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import AllAssignments from "../Pages/allAssignments/allAssignments";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateAssignment from "../Pages/createAssignment/createAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import MyAssignments from "../Pages/MyAssignment/MyAssignments";
import GiveMark from "../Pages/GiveMark/GiveMark";



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
        loader:()=>fetch('http://localhost:5000/assignments')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/assignments/:id",
        element:<AssignmentDetails></AssignmentDetails>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path: "/updateAssignment/:id",
        element:<UpdateAssignment></UpdateAssignment>,
        loader:({params})=>fetch(`http://localhost:5000/assignments/${params.id}`)
      },
      {
        path:"/submittedAssignments",
        element:<SubmittedAssignments></SubmittedAssignments>
      },
      {
        path:"/myAssignments",
        element:<MyAssignments></MyAssignments>,
      },
      {
        path:"/giveMarks/:id",
        element:<GiveMark></GiveMark>,
        loader:({params})=>fetch(`http://localhost:5000/submittedAssignments/${params.id}`)
      }
    ],
  },
]);

export default router;
