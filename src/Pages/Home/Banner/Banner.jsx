import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/JQsxr5N/6871644-29493.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="mb-5 text-6xl">
            <motion.p
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.6 }}
              className="font-bold text-white"
            >
              Grow
            </motion.p>
          </div>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mb-5 text-white text-lg"
          >
            Empower your learning journey with Grow: Where Knowledge Blossoms.
            Uniting minds, fostering growth, and cultivating success together.
            Join us in the pursuit of academic excellence!
          </motion.p>
          <Link to="/allAssignments">
            <motion.button
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.7 }}
              className="btn btn-primary bg-teal-600 border-none text-white"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
