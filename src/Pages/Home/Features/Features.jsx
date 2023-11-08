import inter from '../../../assets/inter.jpg'
import live from '../../../assets/live.jpeg'
import progress from '../../../assets/progress.webp'
import resource from '../../../assets/resource.jpeg'
const Features = () => {
  return (
    <div className="w-full my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 items-center ">
        <div className="border shadow-xl p-2 rounded-md">
          <img className='w-32 h-32 rounded-full mx-auto my-4' src={inter} alt="" />
          <h3 className="text-center">Interactive Study</h3>
          <p className="text-center">
            Create or join study groups based on subjects, interests, or
            academic levels. Foster collaboration and knowledge sharing among
            members in real-time, allowing users to interact through text,
            video, and voice chat.
          </p>
        </div>
        <div className=" border shadow-xl p-2 rounded-md">
          <img className='w-32 h-32 rounded-full mx-auto my-4' src={resource} alt="" />
          <h3 className="text-center">Resource Hub</h3>
          <p className="text-center">
            Provide a centralized repository for educational resources,
            including study guides, articles, videos, and relevant links. Enable
            users to upload and share study materials, making it easier for
            everyone to access valuable resources.
          </p>
        </div>
        <div className=" border shadow-xl p-2 rounded-md">
          <img className='w-32 h-32 rounded-full mx-auto my-4' src={live} alt="" />
          <h3 className="text-center">Live Sessions</h3>
          <p className="text-center">
            Offer live tutoring sessions where experienced tutors can conduct
            group discussions, answer questions, and provide additional support.
            Schedule regular study sessions with expert tutors to enhance
            understanding of complex topics.
          </p>
        </div>
        <div className=" border shadow-xl p-2 rounded-md">
          <img className='w-32 h-32 rounded-full mx-auto my-4' src={progress} alt="" />
          <h3 className="text-center">Progress Tracking</h3>
          <p className="text-center">
            Implement a feature that allows users to track their progress over
            time. Users can set goals, monitor their study hours, track
            completed assignments, and receive personalized recommendations based on their performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
