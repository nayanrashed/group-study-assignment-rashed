const SubmittedAssignmentCard = ({ assignment }) => {
  const {
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
      <h3 className="text-3xl">Submitted</h3>
    </div>
  );
};

export default SubmittedAssignmentCard;
