import { motion } from "framer-motion";
import { Lightbulb, BrainCircuit, BarChart3, Globe2 } from "lucide-react";

const objectives = [
  {
    icon: <Lightbulb className="w-6 h-6 text-green-600" />,
    title: "Identify Current Limitations",
    desc: "Examine current tea plantation practices and analyze export bottlenecks to define the baseline challenges.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-green-600" />,
    title: "Develop ML Models",
    desc: "Design and train machine learning models for yield prediction, disease detection, and climate response.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    title: "Create Export Forecasting Engine",
    desc: "Build a forecasting module for foreign exchange predictions using historical and market data.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-green-600" />,
    title: "Implement User Portal",
    desc: "Develop a responsive web platform for farmers, stakeholders, and exporters with interactive visual dashboards.",
  },
];

const ResearchObjectives = () => {
  return (
    <section
      id="research-objectives"
      className="bg-white py-16 px-4 md:px-16 scroll-mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Research Objectives
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-700 text-lg">
          Our objectives are designed to bridge the gap between traditional
          farming methods and smart, data-driven agriculture optimized for
          global competitiveness.
        </p>
      </motion.div>

      <div className="relative mt-16">
        {/* Timeline Line with Gradient */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-emerald-500 to-green-600 z-0"></div>

        <div className="space-y-16 relative z-10">
          {objectives.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                } items-center md:items-start md:justify-between`}
              >
                {/* Connector Dot and Number */}
                <div className="hidden md:flex flex-col items-center justify-center w-1/12 relative">
                  <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white z-10"></div>
                  <span className="absolute top-10 text-5xl font-bold text-gray-200 opacity-20">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="md:w-5/12 bg-white border border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="mb-2">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden md:block md:w-1/12"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectives;
