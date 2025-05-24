import { FaFilePdf, FaFilePowerpoint } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Document {
  name: string;
  date: string | null;
  type: string | string[];
  link: string | { [key: string]: string } | null;
}

const documents: Document[] = [
  {
    name: "Topic Assessment",
    date: "2021/02/25",
    type: "Group",
    link: "#",
  },
  {
    name: "Project Charter",
    date: "2021/02/25",
    type: "Group",
    link: "#",
  },
  {
    name: "Project Proposal",
    date: "2021/03/22",
    type: "Individual",
    link: "#",
  },
  {
    name: "Status Documents I",
    date: "2021/07/05",
    type: "Individual",
    link: "#",
  },
  {
    name: "Status Documents II",
    date: null,
    type: "Individual",
    link: null,
  },
  {
    name: "Research Paper",
    date: null,
    type: "Group",
    link: null,
  },
  {
    name: "Final Report",
    date: "2021/10/13",
    type: ["Group", "Individual"],
    link: { Group: "#", Individual: "#" },
  },
  {
    name: "Poster",
    date: "2021/10/13",
    type: "Group",
    link: "#",
  },
];

const presentations: Document[] = [
  {
    name: "Project Proposal",
    date: "2021/03/14",
    type: "Group",
    link: "#",
  },
  {
    name: "Progress Presentation I",
    date: "2021/07/08",
    type: "Group",
    link: "#",
  },
  {
    name: "Progress Presentation II",
    date: "2021/10/18",
    type: "Group",
    link: "#",
  },
  {
    name: "Final Presentation",
    date: null,
    type: "Group",
    link: null,
  },
];

export default function Downloads() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-6 py-10 bg-gray-50" ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-6"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Downloads
      </motion.h2>

      <motion.div
        className="mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h3 className="text-2xl font-semibold mb-2">Documents</h3>
        <p className="text-gray-600 mb-6">
          Please find all documents related to this project below.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {documents.map((doc, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-4 border rounded hover:scale-[1.02] transition-transform duration-200 bg-white"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <FaFilePdf className="text-red-600 text-2xl mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold">{doc.name}</h4>
                <p className="text-sm text-gray-500">
                  {doc.date
                    ? `Submitted on ${doc.date}`
                    : "Yet to be submitted, link will be updated soon."}
                </p>
                {Array.isArray(doc.type) ? (
                  <div className="flex gap-4 mt-2">
                    {doc.type.map((t) => (
                      <a
                        key={t}
                        href={(doc.link as any)[t]}
                        className="flex items-center text-blue-600 text-sm hover:underline"
                      >
                        {t} <MdDownload className="ml-1" />
                      </a>
                    ))}
                  </div>
                ) : doc.link ? (
                  <a
                    href={doc.link as string}
                    className="flex items-center text-blue-600 text-sm mt-1 hover:underline"
                  >
                    {doc.type} <MdDownload className="ml-1" />
                  </a>
                ) : (
                  <p className="text-sm text-gray-400 mt-1">{doc.type}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h3 className="text-2xl font-semibold mb-2">Presentations</h3>
        <p className="text-gray-600 mb-6">
          Please find all presentations related to this project below.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {presentations.map((ppt, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 p-4 border rounded hover:scale-[1.02] transition-transform duration-200 bg-white"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <FaFilePowerpoint className="text-orange-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold">{ppt.name}</h4>
                <p className="text-sm text-gray-500">
                  {ppt.date
                    ? `Submitted on ${ppt.date}`
                    : "Yet to be submitted, link will be updated soon."}
                </p>
                {/* {ppt.link ? (
                  <a href={ppt.link} className="flex items-center text-blue-600 text-sm mt-1 hover:underline">
                    {ppt.type} <MdDownload className="ml-1" />
                  </a>
                ) : (
                  <p className="text-sm text-gray-400 mt-1">{ppt.type}</p>
                )} */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
