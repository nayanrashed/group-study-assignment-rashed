import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const allAssignments = () => {
  const allAssignments = useLoaderData();
  const { user } = useContext(AuthContext);

  const [assignments, setAssignments] = useState(allAssignments);

  const handleDelete = (_id, creatorEmail) => {
    if (user) {
      if (user?.email !== creatorEmail) {
        console.log("you are not authorized");
      } else {
        console.log("Delete:", _id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/assignments/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  console.log("deleted successfully");
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                  const remainingAssignment = assignments.filter(assignment=>assignment._id !==_id)
                  setAssignments(remainingAssignment);
                }
              });
          }
        });
      }
    } else {
      console.log("Please Login First");
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-center">
        All Assignment: {assignments.length}
      </h2>
      <div>
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
            handleDelete={handleDelete}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default allAssignments;
