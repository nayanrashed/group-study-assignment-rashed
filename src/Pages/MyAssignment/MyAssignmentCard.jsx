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
      <div className="md:flex bg-base-100 shadow-xl shadow-teal-100 mb-4">
        <figure className=" w-full md:w-2/5">
          <img className="w-full h-full" src={imageURL} alt="thumbnail" />
        </figure>
        <div className="card-body w-full md:w-3/5">
          <h2 className="card-title">{title}</h2>
          <div>
            <p>
              Difficulty Level: <span className="font-bold">{level}</span>{" "}
            </p>
            <p>Status: <span className="font-bold">{status}</span></p>
            <p>
              Submitted Document:
              <a
                className="underline italic text-blue-500"
                href={pdfLink}
                target="_blank"
              > 
                PDF Link
              </a>
            </p>
          </div>
          <div className="flex justify-between">
            <p>Obtained Marks: <span className="font-semibold">{givenMarks}</span></p>
            <p>Total Marks: <span className="font-semibold">{marks}</span></p>
          </div>
          <p><span className="font-semibold">Examiners Comments:</span> {feedback}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default MyAssignmentCard;
