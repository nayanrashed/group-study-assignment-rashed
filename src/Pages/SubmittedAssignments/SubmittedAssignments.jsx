import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";

const SubmittedAssignments = () => {
  const { user } = useContext(AuthContext);
  const status = 'pending';
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const url = `https://group-study-server-six.vercel.app/submittedAssignments`;

  useEffect(() => {
    fetch(url,{credentials: 'include'})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const selected = data?.filter(
          (assignment) => assignment?.status === status
        );        
        setPendingAssignments(selected);
      });
  }, [url,user?.email]);

  
  return (
    <div>
      <h2 className="text-xl text-center p-6 bg-base-100 rounded-lg mb-4 shadow-lg shadow-teal-50">
        Pending Assignments: {pendingAssignments.length}
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
