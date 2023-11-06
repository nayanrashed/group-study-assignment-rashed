/* eslint-disable react/jsx-no-target-blank */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";

const SubmittedAssignmentCard = ({ assignment }) => {
  const { user } = useContext(AuthContext);
  const examinerEmail = user?.email;
  const {
    _id,
    title,
    assignmentId,
    pdfLink,
    marks,
    level,
    submitDetails,
    submitterEmail,
    creatorEmail,
    status,
  } = assignment;
  return (
    <div>
      <div className="card shadow-lg border">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Total Marks: {marks}</p>
          <p>Examinees Email: {submitterEmail}</p>
          <div className="card-actions justify-end">
           <Link to={`/giveMarks/${_id}`} className="btn btn-primary btn-sm "> Give Mark</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedAssignmentCard;
