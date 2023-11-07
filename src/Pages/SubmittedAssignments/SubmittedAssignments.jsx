import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";

const SubmittedAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const url = `http://localhost:5000/submittedAssignments?status=pending`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPendingAssignments(data);
      });
  }, [url]);

  
  return (
    <div>
      <h2 className="text-3xl">
        Submitted Assignments:{pendingAssignments.length}
      </h2>
      <div className="md:grid md:grid-cols-2 gap-6">
        {pendingAssignments.map((assignment) => (
          <SubmittedAssignmentCard
            key={assignment._id}
            assignment={assignment}            
          ></SubmittedAssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default SubmittedAssignments;
