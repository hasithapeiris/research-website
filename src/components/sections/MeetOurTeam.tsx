import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface TeamMember {
  name: string;
  position: string;
  university: string;
  department: string;
  image: string;
  linkedin: string;
  email: string;
}

const topMembers: TeamMember[] = [
  {
    name: "Alice Fernando",
    position: "Team Lead",
    university: "University of Colombo",
    department: "Department of Computer Science",
    image: "/images/alice.jpg",
    linkedin: "https://linkedin.com/in/alice",
    email: "alice@example.com",
  },
  {
    name: "Bob Silva",
    position: "ML Engineer",
    university: "University of Colombo",
    department: "Department of Computer Science",
    image: "/images/bob.jpg",
    linkedin: "https://linkedin.com/in/bob",
    email: "bob@example.com",
  },
  {
    name: "Chathura Perera",
    position: "Frontend Developer",
    university: "University of Colombo",
    department: "Department of Computer Science",
    image: "/images/chathura.jpg",
    linkedin: "https://linkedin.com/in/chathura",
    email: "chathura@example.com",
  },
];

const otherMembers: TeamMember[] = [
  {
    name: "Dilani Jayasuriya",
    position: "Backend Developer",
    university: "University of Colombo",
    department: "Department of Computer Science",
    image: "/images/dilani.jpg",
    linkedin: "https://linkedin.com/in/dilani",
    email: "dilani@example.com",
  },
  {
    name: "Eshan Rodrigo",
    position: "Data Analyst",
    university: "University of Colombo",
    department: "Department of Computer Science",
    image: "/images/eshan.jpg",
    linkedin: "https://linkedin.com/in/eshan",
    email: "eshan@example.com",
  },
  {
    name: "Fathima Nazeer",
    position: "DevOps Engineer",
    university: "University of Colombo",
    department: "Department of Computer Science",
    image: "/images/fathima.jpg",
    linkedin: "https://linkedin.com/in/fathima",
    email: "fathima@example.com",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function MeetOurTeam() {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          Meet Our Team
          <span className="block w-24 h-1 bg-gradient-to-r from-green-400 to-teal-500 mt-2 mx-auto"></span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {topMembers.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-teal-600 font-medium">
                {member.position}
              </p>
              <p className="text-sm text-gray-500">{member.university}</p>
              <p className="text-sm text-gray-500 mb-2">{member.department}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition" />
                </a>
                <a href={`mailto:${member.email}`}>
                  <FaEnvelope className="text-red-500 text-xl hover:text-red-700 transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {otherMembers.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-teal-600 font-medium">
                {member.position}
              </p>
              <p className="text-sm text-gray-500">{member.university}</p>
              <p className="text-sm text-gray-500 mb-2">{member.department}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800 transition" />
                </a>
                <a href={`mailto:${member.email}`}>
                  <FaEnvelope className="text-red-500 text-xl hover:text-red-700 transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
