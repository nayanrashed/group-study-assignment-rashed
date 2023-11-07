import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import Swal from "sweetalert2";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
    title,
    marks,
    level,
    date,
    imageURL,
    description,
    creatorEmail,
    category,
  } = assignment;
 
  const submitterEmail = user?.email;
  const assignmentId = _id;
  const status = "pending";

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const pdfLink = form.pdf.value;
    const submitDetails = form.submitDetails.value;
    const submittedAssignment = {
      title,
      assignmentId,
      pdfLink,
      marks,
      imageURL,
      level,
      date,
      description,
      submitDetails,
      submitterEmail,
      creatorEmail,
      status
    };
    console.log(submittedAssignment);
    fetch("http://localhost:5000/submittedAssignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submittedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);})
        Swal.fire({
            title: "Success",
            text: "Assignment Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
    navigate("/allAssignments");
  };

  return (
    <div>
      <div className="card card-compact w-3/4 h-[100vh] mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={imageURL} alt="thumbnail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex">
            <p className="flex-1">
              Difficulty Level: <span className="font-bold">{level}</span>
            </p>
            <p className="flex-1">
              Category: <span className="font-bold">{category}</span>
            </p>
          </div>
          <div className="flex">
            <p className="flex-1">Total Marks: {marks}</p>
            <p className="flex-1">Submission Date: {date}</p>
          </div>
          <p>Details: {description}</p>
          <div className="card-actions justify-end">
            
            {/* -----Modal----- */}
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Take Assignment
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <form onSubmit={handleSubmitAssignment} className="modal-box">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PDF Link</span>
                  </label>
                  <input
                    type="text"
                    name="pdf"
                    placeholder="PDF Link"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Detail Description"
                    name="submitDetails"
                  ></textarea>
                </div>
                <p>Pres ESC to cancel</p>
                <div className="modal-action">
                  <div method="dialog w-full">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Submit</button>
                  </div>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
