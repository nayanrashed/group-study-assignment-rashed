import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const {user}= useContext(AuthContext)
  const {
    _id,
    title,
    marks,
    level,
    date,
    imageURL,
    description,
    creatorEmail,
    category
  } = assignment;
  const handleUpdateAssignment = (e) => {
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
    const updatedAssignment = {
      title,
      marks,
      level,
      category,
      date,
      imageURL,
      description,
      creatorEmail,
    };
    console.log(updatedAssignment);
    //sending data to update
    fetch(`https://group-study-server-six.vercel.app/assignments/${_id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body: JSON.stringify(updatedAssignment),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Success",
                text: "Assignment Updated Successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
        }
    })
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="w-full md:w-3/4 lg:w-2/3">
            <p className="font-semibold text-2xl text-center p-4 shadow-lg rounded-xl mb-4 shadow-teal-50">
              Update Assignment
            </p>
            <div className="card shadow-2xl bg-base-100">
              <form
                onSubmit={handleUpdateAssignment}
                className="card-body border w-full"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    defaultValue={title}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="flex gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Marks</span>
                    </label>
                    <input
                      type="number"
                      name="marks"
                      placeholder="Marks"
                      defaultValue={marks}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Difficulty Level</span>
                    </label>
                    <select className="border rounded-lg p-3" name="level" defaultValue={level}>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="form-control flex-1">
                    <label className="label">
                      <span className="label-text">Due Date</span>
                    </label>
                    <DatePicker
                      className="border p-3 rounded-lg w-full"
                      defaultValue={date}
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
                      defaultValue={category}
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
                    defaultValue={imageURL}                    
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
                    defaultValue={description}
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update Assignment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssignment;
