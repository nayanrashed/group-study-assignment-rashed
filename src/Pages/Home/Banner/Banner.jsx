import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/JQsxr5N/6871644-29493.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl"> <span className="font-bold text-teal-300">Grow</span> Here</h1>
          <p className="mb-5 text-white text-lg">
          Empower your learning journey with Grow: Where Knowledge Blossoms. Uniting minds, fostering growth, and cultivating success together. Join us in the pursuit of academic excellence!
          </p>
          <Link to='/allAssignments'><button className="btn btn-primary bg-teal-600 border-none text-white">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
