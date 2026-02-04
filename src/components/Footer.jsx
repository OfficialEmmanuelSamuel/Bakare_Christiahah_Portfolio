import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur border-t border-gray-200/60 dark:border-zinc-800/60">

      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 w-full bg-linear-to-r from-transparent via-rose-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <p className="text-sm text-gray-900 dark:text-gray-200 font-quicksand tracking-wide">
          © {year} Christianah. All rights reserved.
        </p>

        

        {/* Right */}
        <div className="flex items-center gap-5">
          {[ 
            { Icon: FaGithub, href: "https://github.com/Ayanfechristie1" },
            { Icon: FaLinkedin, href: "https://www.linkedin.com/in/christianah-oluwatobi" },
            { Icon: FaInstagram, href: "https://instagram.com/engr_christine" },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="p-2 rounded-full bg-gray-800 dark:bg-zinc-800 text-gray-100 dark:text-gray-300 
                         hover:text-white hover:scale-110 hover:bg-gray-700 dark:hover:bg-black
                         transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
