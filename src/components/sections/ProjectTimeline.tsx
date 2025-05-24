import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaChartLine,
  FaFileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdWeb, MdBook, MdDoneAll } from "react-icons/md";

const milestones = [
  {
    date: "March 2021",
    title: "Project Proposal",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marks: 6,
    percent: 6,
    icon: <FaCalendarAlt className="text-emerald-500 w-6 h-6" />,
  },
  {
    date: "June 2021",
    title: "Progress Presentation I",
    description:
      "Reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marks: 6,
    percent: 50,
    icon: <FaChartLine className="text-blue-500 w-6 h-6" />,
  },
  {
    date: "July 2021",
    title: "Research Paper",
    description:
      "Describes your contribution to existing knowledge, with proper citation of all referenced work.",
    marks: 10,
    percent: 60,
    icon: <FaFileAlt className="text-orange-500 w-6 h-6" />,
  },
  {
    date: "September 2021",
    title: "Progress Presentation II",
    description:
      "90% completion status demo with poster presentation that covers the project in full.",
    marks: 18,
    percent: 90,
    icon: <FaChalkboardTeacher className="text-pink-500 w-6 h-6" />,
  },
  {
    date: "October 2021",
    title: "Website Assessment",
    description:
      "Website promotes our research and reveals all project details for assessment.",
    marks: 2,
    percent: 92,
    icon: <MdWeb className="text-indigo-500 w-6 h-6" />,
  },
  {
    date: "November 2021",
    title: "Logbook",
    description:
      "Project status is validated through the Logbook including Status Documents 1 & 2.",
    marks: 3,
    percent: 95,
    icon: <MdBook className="text-yellow-500 w-6 h-6" />,
  },
  {
    date: "November 2021",
    title: "Final Report",
    description:
      "Evaluation of the completed project including individual, group, and final reports.",
    marks: 19,
    percent: 97,
    icon: <BsFileEarmarkTextFill className="text-purple-500 w-6 h-6" />,
  },
  {
    date: "November 2021",
    title: "Final Presentation & Viva",
    description:
      "Individual viva held to assess each member’s contribution to the project.",
    marks: 20,
    percent: 100,
    icon: <MdDoneAll className="text-red-500 w-6 h-6" />,
  },
];

const ProjectTimeline = () => {
  return (
    <section
      id="timeline"
      className="bg-white py-20 px-6 md:px-20 scroll-mt-16"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold text-gray-800">Project Timeline</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-600 mx-auto mt-2 rounded-full"></div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-gradient-to-b from-emerald-400 to-green-600 pl-6 md:pl-0">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            className={`relative mb-12 md:w-1/2 ${
              i % 2 === 0 ? "md:ml-auto md:pr-12" : "md:mr-auto md:pl-12"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Dot and Number */}
            <div className="absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-4 border-white z-10 flex items-center justify-center text-white text-xs font-bold">
              {i + 1}
            </div>

            {/* Card */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-lg relative">
              {/* Low-opacity number background */}
              <div className="absolute right-4 top-2 text-6xl font-bold text-gray-200 opacity-10 z-0">
                {i + 1}
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-2 text-sm text-gray-600 font-medium">
                  {m.icon}
                  <span className="ml-2">{m.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {m.title}
                </h3>
                <p className="text-gray-600 text-sm">{m.description}</p>
                <p className="text-sm font-medium text-gray-700 mt-3">
                  Marks Allocated: {m.marks}
                </p>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${m.percent}%` }}
                  ></div>
                </div>
                <p className="text-right text-xs text-gray-500 mt-1">
                  {m.percent}% completed
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTimeline;
