import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";

const SubmittedAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const url = `https://group-study-server-six.vercel.app/submittedAssignments?status=pending`;

  useEffect(() => {
    fetch(url,{credentials:"include"})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPendingAssignments(data);
      });
  }, [url]);

  
  return (
    <div>
      <h2 className="text-xl text-center p-6 bg-base-100 rounded-lg mb-4 shadow-lg shadow-teal-100">
        Pending Assignments:{pendingAssignments.length}
      </h2>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
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
