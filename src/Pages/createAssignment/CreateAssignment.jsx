import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  // console.log(user.email);
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const category = form.category.value;
    const date = startDate;
    const imageURL = form.image.value;
    const description = form.description.value;
    const creatorEmail = user.email;
    const newAssignment = {
      title,
      marks,
      level,
      category,
      date,
      imageURL,
      description,
      creatorEmail,
    };
    console.log(newAssignment);
    fetch("https://group-study-server-six.vercel.app/assignments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        e.target.reset();
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Assignment Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-full md:w-2/3">
          <p className=" font-semibold text-2xl text-center mb-6 p-4 shadow-lg rounded-lg shadow-teal-100">
            Create an Assignment
          </p>
          <div className="card shadow-2xl bg-base-100">
            <form
              onSubmit={handleCreateAssignment}
              className="card-body w-full"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="md:flex gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Marks</span>
                  </label>
                  <input
                    type="number"
                    name="marks"
                    placeholder="Marks"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Difficulty Level</span>
                  </label>
                  <select className="border rounded-lg p-3" name="level">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
              </div>
              <div className="md:flex gap-6">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Due Date</span>
                  </label>
                  <DatePicker className="border p-3 rounded-lg w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  
                </div>
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Category Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="image URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Detail Description"
                  name="description"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Create Assignment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
