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
        Swal.fire({
          title: "Opps!",
          text: "You are not authorized to DELETE.",
          icon: "error",
        });
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
                  const remainingAssignment = assignments.filter(
                    (assignment) => assignment._id !== _id
                  );
                  setAssignments(remainingAssignment);
                }
              });
          }
        });
      }
    } else {
      Swal.fire({
        title: "Opps!",
        text: "Please Login First.",
        icon: "error",
      });
    }
  };
  const handleFilter=e=>{
    e.preventDefault();
    const form =e.target;
    const level = form.level.value;
    console.log(level);
    if(level==="all"){
      console.log(level);
      setAssignments(allAssignments);
    }
    else if(level==="easy"){
      console.log(level);
      const easyAssignments = allAssignments.filter(assignment=>assignment.level===level)
      setAssignments(easyAssignments)
    }
    else if(level==="medium"){
      console.log(level);
      const mediumAssignments = allAssignments.filter(assignment=>assignment.level===level)
      setAssignments(mediumAssignments)
    }
    else if (level==="hard"){
      console.log(level);
      const hardAssignments = allAssignments.filter(assignment=>assignment.level===level)
      setAssignments(hardAssignments)
    }
  }
  return (
    <div>
      <div className="flex justify-between">
        <form onSubmit={handleFilter}>
          <div className=" flex">
            <label className="label">
              <span className="label-text px-4">
                Filter by Difficulty Level
              </span>
            </label>
            <select className="border rounded-lg" name="level">
              <option value="all">All</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <button className="btn btn-sm ml-4">Submit</button>
          </div>
        </form>
        <h2 className="text-xl pr-4">All Assignment: {assignments.length}</h2>
      </div>
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
