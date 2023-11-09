import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";

const SubmittedAssignmentCard = ({ assignment }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    pdfLink,
    marks,
    level,
    status,
    submitDetails,
    submitterEmail,
    
  } = assignment;

  // const pdfURL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
  return (
    <div className="mb-6">
      <div className="card shadow-lg shadow-teal-100 border">
        <div className="card-body">
          <div className="grid md:flex">
            <div className="w-full md:w-2/5">
              <iframe src={pdfLink} width="100%" height="300px" />
              {/* <Document file={pdfLink}>
              <Page pageNumber={1} />
            </Document> */}
            <p className="text-center my-2"><span className="font-semibold">PDF Link:</span> <a className="underline italic text-blue-600" href={pdfLink}>Open PDF</a></p>
            </div>
            <div className="w-full md:w-3/5 pl-4">
              <h2 className="card-title mb-4">{title}</h2>
              <p> <span className="font-semibold">Total Marks:</span> {marks}</p>
              <p className="mb-3"> <span className="font-semibold">Difficulty Level:</span> {level}</p>
              <p className="mb-4"><span className="font-semibold">Submitted By:</span> {submitterEmail}</p>
              <p className="mb-4"><span className="font-semibold">Status:</span>  {status}</p>
              <p> <span className="font-semibold">Comments: </span>{submitDetails}</p>
              <p></p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/giveMarks/${_id}`} className="btn btn-primary btn-sm ">
             
              Give Mark
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmittedAssignmentCard;
