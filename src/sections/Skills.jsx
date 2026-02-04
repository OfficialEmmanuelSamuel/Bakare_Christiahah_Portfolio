import {
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaJava,
  FaPenNib,
} from "react-icons/fa";
import { SiCoreldraw, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "Microsoft Word", icon: <FaFileWord className="text-blue-600" /> },
  { name: "Microsoft Excel", icon: <FaFileExcel className="text-green-600" /> },
  {
    name: "PowerPoint",
    icon: <FaFilePowerpoint className="text-orange-500" />,
  },
  { name: "CorelDRAW", icon: <SiCoreldraw className="text-emerald-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "UI/UX Design", icon: <SiFigma className="text-pink-500" /> },
];

const softSkills = [
  "Problem Solving",
  "Adaptability",
  "patience",
  "Willingness to Learn",
  "Customer Service", 
  "Creativity",
  "Teamwork",
  "Time Management",
  
  "Strong Communication",
  "Attention to Detail",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-14 px-6 min-h-screen bg-gray-100 dark:bg-linear-to-b dark:from-zinc-800 dark:to-zinc-800 transition-colors"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-lato text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="mt-5 text-gray-600 dark:text-gray-200 font-quicksand">
            Tools I use and qualities I bring to every project
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl text-center font-inter font-light mb-6 text-gray-800 dark:text-gray-200">
            Technical Skills
            <span className="block mx-auto h-0.5 rounded-full bg-rose-800 mt-1 w-10 animate-bounce"></span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white dark:bg-zinc-600 rounded-xl shadow-sm hover:shadow-lg border border-gray-200/50 dark:border-zinc-800/50 p-5 flex flex-col items-center justify-center text-center transition"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <p className="text-sm font-medium font-quicksand text-gray-700 dark:text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl text-center font-medium font-quicksand mb-6 text-gray-800 dark:text-gray-200">
            Soft Skills
            <span className="block mx-auto h-0.5 rounded-full bg-rose-800 mt-1 w-5 animate-bounce"></span>
          </h3>

          <div className="flex flex-wrap gap-4 justify-center items-center lg:w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 rounded-full text-sm font-quicksand font-medium bg-gray-300 text-gray-950 dark:bg-gray-500 dark:text-white   transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
