import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyAssignmentCard from "./MyAssignmentCard";


const MyAssignments = () => {
    const { user } = useContext(AuthContext);
  const [myAssignments, setMyAssignments] = useState([]);
  const url = `http://localhost:5000/submittedAssignments?submitterEmail=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyAssignments(data);
      });
  }, [url]);
    return (
        <div>
            <h2 className="text-2xl">My Assignments: {myAssignments.length}</h2>
            <div>
                { myAssignments.map(myAssignment=><MyAssignmentCard key={myAssignment?._id} myAssignment={myAssignment} ></MyAssignmentCard>)}
            </div>
        </div>
    );
};

export default MyAssignments;