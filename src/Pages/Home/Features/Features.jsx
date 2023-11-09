import inter from "../../../assets/inter.jpg";
import live from "../../../assets/live.jpeg";
import progress from "../../../assets/progress.webp";
import resource from "../../../assets/resource.jpeg";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <div>
        <h2 className="text-center text-2xl font-semibold p-2 mt-4 bg-base-100 rounded-lg shadow-lg shadow-teal-100">Our Features</h2>
      <div className="w-full my-6 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center  ">
          <motion.div
            whileHover={{ y: -60 }}
            className="border shadow-xl shadow-teal-100 p-2 rounded-md my-6 md:my-2"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto my-4"
              src={inter}
              alt=""
            />
            <h3 className="text-center text-xl font-semibold mb-2">
              Interactive Study
            </h3>
            <p className="text-center">
              Create or join study groups based on subjects, interests, or
              academic levels. Foster collaboration and knowledge sharing among
              members in real-time, allowing users to interact through text,
              video, and voice chat.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: 60 }}
            className=" border shadow-xl shadow-teal-100 p-2 rounded-md my-6 md:my-2"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto my-4"
              src={resource}
              alt=""
            />
            <h3 className="text-center text-xl font-semibold mb-2">
              Resource Hub
            </h3>
            <p className="text-center">
              Provide a centralized repository for educational resources,
              including study guides, articles, videos, and relevant links.
              Enable users to upload and share study materials, making it easier
              for everyone to access valuable resources.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -60 }}
            className=" border shadow-xl shadow-teal-100 p-2 rounded-md my-6 md:my-2"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto my-4"
              src={live}
              alt=""
            />
            <h3 className="text-center text-xl font-semibold mb-2">
              Live Sessions
            </h3>
            <p className="text-center">
              Offer live tutoring sessions where experienced tutors can conduct
              group discussions, answer questions, and provide additional
              support. Schedule regular study sessions with expert tutors to
              enhance understanding of complex topics.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: 60 }}
            className=" border shadow-xl shadow-teal-100 p-2 rounded-md my-6 md:my-2"
          >
            <img
              className="w-32 h-32 rounded-full mx-auto my-4"
              src={progress}
              alt=""
            />
            <h3 className="text-center text-xl font-semibold mb-2">
              Progress Tracking
            </h3>
            <p className="text-center">
              Implement a feature that allows users to track their progress over
              time. Users can set goals, monitor their study hours, track
              completed assignments, and receive personalized recommendations
              based on their performance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
