import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const GiveMark = () => {
  const { user } = useContext(AuthContext);
  const pendingAssignment = useLoaderData();
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
  } = pendingAssignment;

  const handleGiveMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const givenMarks = form.givenMarks.value;
    const feedback = form.feedback.value;
    console.log(givenMarks,feedback);    
  };
  return (
    <div className="border w-1/2 mx-auto">
      <div>
        <p className="text-center">Title: {title}</p>
        <p className="text-center">
          Assignment Link:
          <a className="underline text-blue-500" href={pdfLink} target="_blank">
            PDF Link
          </a>
        </p>
        <p className="text-center">Submitted Note: {submitDetails}</p>
      </div>
      <div>
        <form onSubmit={handleGiveMark} className="card-body border w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input
              type="number"
              name="givenMarks"
              placeholder="Give Marks"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Feedback</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Give your feedback"
              name="feedback"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveMark;
