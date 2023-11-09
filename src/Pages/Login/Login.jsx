import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    setError("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success",
          text: "Registration Completed",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        Swal.fire({
          title: "Error!",
          text: "Wrong Email of Password",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };

  const handleGoogleLogin=()=>{
    signInWithGoogle() 
    .then(result=>{
        navigate(location?.state ? location.state : "/");
        window.location.reload();
        console.log(result.user);
    })   
    .catch(error=>{
        console.error(error);
    })
  }

  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-gradient-to-r from-sky-100 to-teal-400">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 shadow-teal-100">
              <form onSubmit={handleLogin} className="card-body">
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

                {error && <p className="text-red-400">{error}</p>}
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center mb-2 font-semibold">or</p>
              <p className="text-center mb-4">Login With <button onClick={handleGoogleLogin} className="btn btn-outline btn-sm">Google</button></p>
              <p className="text-center mb-4">
                Do not have an Account?
                <Link className="text-sky-600 font-semibold" to="/register">
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
