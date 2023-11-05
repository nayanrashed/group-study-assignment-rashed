const CreateAssignment = () => {
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const level = form.level.value;
    const date = form.date.value;
    const imageURL = form.image.value;
    const description = form.description.value;
    const newAssignment = {title,marks,level,date,imageURL,description}
    console.log(newAssignment);
    fetch('http://localhost:5000/assignments',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newAssignment)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="border w-2/3">
          <p className=" font-semibold text-2xl text-center p-4">
            Create an Assignment
          </p>
          <div className="card shadow-2xl bg-base-100">
            <form
              onSubmit={handleCreateAssignment}
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
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Due Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"                    
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
                placeholder="Detail Description" name="description"
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
