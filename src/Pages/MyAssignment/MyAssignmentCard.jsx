const MyAssignmentCard = ({ myAssignment }) => {
  const {
    title,
    pdfLink,
    marks,
    imageURL,
    level,
    feedback,
    givenMarks,
    submitterEmail,
    creatorEmail,
    examinerEmail,
    status,
  } = myAssignment;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-4">
        <figure className="w-1/3">
          <img src={imageURL} alt="thumbnail" />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">{title}</h2>
          <div>
            <p>
              Difficulty Level: <span className="font-bold">{level}</span>{" "}
            </p>
            <p>Status: {status}</p>
            <p>
              Submitted Document:
              <a
                className="underline text-blue-500"
                href={pdfLink}
                target="_blank"
              >
                Document Link
              </a>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Obtained Marks: {givenMarks}</p>
            <p>Total Marks: {marks}</p>
          </div>
          <p>Examiners Comments: {feedback}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MyAssignmentCard;
