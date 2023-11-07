import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyAssignmentCard from "./MyAssignmentCard";

const MyAssignments = () => {
  const { user } = useContext(AuthContext);

  const [myAssignments, setMyAssignments] = useState([]);
  //   const url = `http://localhost:5000/submittedAssignments?submitterEmail=${user?.email}`;
  useEffect(() => {
    fetch("http://localhost:5000/submittedAssignments")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const selected = data?.filter(
          (myAssignment) => myAssignment?.submitterEmail === user?.email
        );
        setMyAssignments(selected);
      });
  }, [user?.email]);
  return (
    <div>
      {myAssignments?.length > 0 ? (
        <div>
          {myAssignments?.map((myAssignment) => (
            <MyAssignmentCard
              key={myAssignment?._id}
              myAssignment={myAssignment}
            ></MyAssignmentCard>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl">
            You have not submitted any assignment yet
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyAssignments;
