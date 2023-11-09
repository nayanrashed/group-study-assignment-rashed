import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const GiveMark = () => {
  const { user } = useContext(AuthContext);
  const pendingAssignment = useLoaderData();
  const navigate = useNavigate();
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
    
  } = pendingAssignment;

  const examinerEmail= user?.email;
  const status = "completed";

  const handleGiveMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const givenMarks = form.givenMarks.value;
    const feedback = form.feedback.value;
    // console.log(givenMarks,feedback, examinerEmail); 
    const updatedSubmittedAssignment = {givenMarks,feedback,examinerEmail,status} 
    fetch(`https://group-study-server-six.vercel.app/submittedAssignments/${_id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body: JSON.stringify(updatedSubmittedAssignment),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Success",
                text: "Marks Given Successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
        }
        navigate('/submittedAssignments')
    })

  };
  return (
    <div className="border w-full rounded-lg md:w-2/3 lg:1/2 mx-auto mb-4 shadow-lg shadow-teal-100">
      <div className="p-6">
        <p className="text-center text-xl mb-2"><span className="font-semibold">Title:</span> {title}</p>
        <p className="text-center">
          <span className="font-semibold">Assignment Link: </span>
          <a className="underline italic text-blue-500" href={pdfLink} target="_blank">
            PDF Link
          </a>
        </p>
        <p className="text-center"><span className="font-semibold">Submitted Note:</span> {submitDetails}</p>
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
