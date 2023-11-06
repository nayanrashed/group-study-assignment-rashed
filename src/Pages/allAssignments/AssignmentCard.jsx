import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { reload } from "firebase/auth";

const AssignmentCard = ({ assignment,handleDelete }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    marks,
    level,
    date,
    imageURL,
    description,
    creatorEmail,
  } = assignment;

//   const handleDelete = (_id) => {
//     if (user) {
//       if (user?.email !== creatorEmail) {
//         console.log("you are not authorized");
//       } else {
//         // console.log('Delete:',_id);
//         Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             fetch(`http://localhost:5000/assignments/${_id}`, {
//               method: "DELETE",
//             })
//               .then((res) => res.json())
//               .then((data) => {
//                 console.log("deleted successfully");
//                 Swal.fire({
//                   title: "Deleted!",
//                   text: "Your file has been deleted.",
//                   icon: "success",
//                 });
//               });
//           }
//         });
//       }
//     } else {
//       console.log("Please Login First");
//     }
//   };

  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl mb-4">
        <figure className="w-1/3">
          <img src={imageURL} alt="thumbnail" />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">{title}</h2>
          <div>
            <p>
              Difficulty Level: <span className="font-bold">{level}</span>{" "}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Total Marks: {marks}</p>
            <p>Submission Date: {date}</p>
          </div>
          <p>Details: {description}</p>
          <div className="card-actions justify-end">
            <Link to={`/assignments/${_id}`} className="btn btn-primary btn-sm">
              View
            </Link>
            <Link
              to={`/updateAssignment/${_id}`}
              className="btn btn-primary btn-sm"
            >
              Update
            </Link>
            <Link
              onClick={() => handleDelete(_id,creatorEmail)}
              className="btn btn-primary btn-sm"
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
