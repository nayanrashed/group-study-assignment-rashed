import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const AssignmentCard = ({ assignment, handleDelete }) => {
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

  const navigate = useNavigate();

  const handleUpdate = () => {
    if (user?.email) {
      if (creatorEmail !== user?.email) {
        Swal.fire({
            title: "Opps!",
            text: "You are requesting for unauthorized access",
            icon: "error",
          });
        navigate("/allAssignments");
      } else {
        navigate(`/updateAssignment/${_id}`);
      }
    } else {
      console.log("plz login first");
      Swal.fire({
        title: "Opps!",
        text: "Please Login First.",
        icon: "error",
      });
    }
  };

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
            <button onClick={handleUpdate} className="btn btn-primary btn-sm">
              Update
            </button>
            {/* <Link
              onClick={() => handleUpdate(_id, creatorEmail)}
              className="btn btn-primary btn-sm"
            >
              Update
            </Link> */}

            <Link
              onClick={() => handleDelete(_id, creatorEmail)}
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
