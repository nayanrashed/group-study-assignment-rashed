import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";



const allAssignments = () => {
    const assignments = useLoaderData();

    return (
        <div>
            <h2 className="text-3xl text-center">All Assignment: {assignments.length}</h2>
            <div>
                {
                    assignments.map(assignment=><AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default allAssignments;