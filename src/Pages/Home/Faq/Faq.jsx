const Faq = () => {
  return (
    <div className="mb-4">
        <h2 className="text-center text-2xl font-semibold p-2 mt-4 mb-6 bg-base-100 rounded-lg shadow-lg shadow-teal-100">FAQ</h2>
      <div className="collapse collapse-arrow bg-teal-100">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
        How do students register for Study Groups?
        </div>
        <div className="collapse-content">
          <p>All registration is processed through an online registration system. Registration typically opens the second week of the term during fall and winter, and significantly earlier for spring and summer. Registration remains open throughout the term, </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-teal-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Do Course Instructors and Study Group Facilitators interact during the term?
        </div>
        <div className="collapse-content">
          <p>We respect faculty time and therefore try to limit unnecessary contact between facilitators and course instructors. However, we do encourage instructors to interact with the facilitators, if they wish. For example, some instructors will hold a beginning of term meeting with all of the Study Group Facilitators for their course to provide an overview of the course and other important information about the term that may be useful.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-teal-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        How can I request a group if no groups are currently offered for my course?
        </div>
        <div className="collapse-content">
          <p>To request a group for your course, please e-mail us at slcstudygroups@umich.edu. While the SLC would like to honor all group requests, it may not be possible in all cases. The Study Group Program Staff will evaluate your request and the feasibility of offering additional groups. It is ideal to request new groups before the start of the term, but requests will be accepted at any point in the term. Introductory level courses are generally given highest priority.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-teal-400">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
        Who should join a Study Group?
        </div>
        <div className="collapse-content">
          <p>All students enrolled in the course are eligible to enroll in a study group. Students of all ability levels are encouraged to join a study group. Study groups provide a great opportunity to have a set study time each week and the chance to work with peers to master course material. However, study groups may not be a fit for all students. Students should join a study group if they are interested in working each week with their peers, are willing to actively participate in meetings, and enjoy studying in a small group environment.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
