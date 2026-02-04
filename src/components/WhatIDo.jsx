import { motion } from "framer-motion";
import { TbDeviceMobileCog } from "react-icons/tb";
import { FaLaptopMedical } from "react-icons/fa6";

const steps = [
  {
    title: "Mobile Technology",
    description:
      "Repair and maintenance of smartphones, tablets and other mobile devices. Operating System installations (Android, IOS). Troubleshooting and resolving mobile related issues.",
    icon: TbDeviceMobileCog,
  },
  {
    title: "IT Services",
    description:
      "Computer hardware and software installations. Network configuration and troubleshooting (WIFI, LAN, WAN). Virus removal and malware protection. Data recovery and backup solution.",
    icon: FaLaptopMedical,
  },
];

const WhatICanDo = () => {
  return (
    <section id="capabilities" className="relative py-15 px-6 duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-5"
        >
          <h2 className="text-3xl font-lato md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I Offer
            <span className="block mx-auto h-0.5 rounded-full bg-rose-800 mt-2 w-30 animate-bounce"></span>
          </h2>
          
          <p className="text-gray-950 font-quicksand font-medium dark:text-white max-w-2xl mx-auto">
            From Mobile Technology to IT Systems, we make it work flawlessly!
          </p>
        </motion.div>

        {/* DESKTOP — Horizontal Timeline */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-2 gap-10 mt-20">
            {steps.map(({ title, description, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Card */}
                <div
                  className="relative p-6 h-auto rounded-3xl bg-white/40 dark:bg-gray-100/5 dark:border-none dark:shadow-gray-100/10 dark:shadow-sm backdrop-blur-xl border border-white/30 shadow-lg"
                >
                  <h3 className="text-2xl font-lato font-semibold flex flex-col items-center  text-gray-900 dark:text-white mb-2">
                    <Icon className="text-8xl text-blue-950 dark:text-white" />{title}
                  </h3>
                  <p className="text-lg font-quicksand mt-3 font-medium text-gray-600 dark:text-gray-200">
                    {description}
                  </p>

                  {/* Glow pulse */}
                  <div
                    className="absolute -inset-1 -z-10 rounded-3xl bg-linear-to-r from-rose-50 to-rose-50 dark:from-gray-900/60 dark:to-gray-900/50 opacity-0 group-hover:opacity-30 blur-sm dark:blur-sm animate-pulse transition"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex flex-col gap-5 max-w-md mx-auto">
          <div className="hidden absolute top-1/3 left-8 w-0.5 h-90 bg-red-500/50" />
          {steps.map(({ title, icon: Icon, description }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center gap-4 p-4 rounded-xl
            bg-white/40 dark:bg-gray-100/5 dark:border-none dark:shadow-gray-100/10 dark:shadow-sm backdrop-blur
              border border-white/30 shadow"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon className="text-5xl text-blue-950 dark:text-white" />
              </motion.div>

              <span className="text-lg bg-rose-800 flex flex-col font-quicksand font-bold text-white py-1 px-5 rounded-2xl dark:text-gray-900 dark:bg-blue-50 uppercase">
                {title}
              </span>
              <span className="text-lg text-center flex flex-col font-quicksand font-medium text-gray-800 dark:text-gray-200">
                {description}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ATS (hidden) */}
        <div className="sr-only">
          Mobile Technician and Customer Service Personnel.
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;
