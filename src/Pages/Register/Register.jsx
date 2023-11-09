import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  console.log(user);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    // console.log(name, email, password, photo);

    //new user
    const createdUser = { name, email, photoURL };
    console.log(createdUser);

    setRegistrationError("");
    setError("");

    if (!/^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/.test(password)) {
      setError(
        "Your password should have at least 6 characters with at least one capital letter and one special character"
      );
    } else {
      setError("");
      createUser(email, password)
        .then((result) => {
          console.log(result.user);

          e.target.reset();
          navigate("/");
          Swal.fire({
            title: "Success",
            text: "Registration Completed",
            icon: "success",
            confirmButtonText: "Close",
          });
        })
        .catch((error) => {
          console.error(error);
          setRegistrationError(error.message);
          Swal.fire({
            title: "Error!",
            text: "Wrong Email of Password",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    }
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-gradient-to-r from-sky-100 to-teal-400">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className=" text-3xl md:text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100 shadow-teal-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                </div>
                {error && <p className="text-red-400">{error}</p>}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className="text-center mb-4">
                Already Have an Account?
                <Link className="text-orange-500 font-semibold" to="/login">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
