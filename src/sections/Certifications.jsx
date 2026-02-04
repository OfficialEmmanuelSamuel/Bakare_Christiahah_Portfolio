import { useEffect, useState } from "react";
import { FaChevronDown, FaAward } from "react-icons/fa6";
import toast from "react-hot-toast";
import FloatingEffects from "../components/FloatingEffects";

const Certifications = () => {
  const [groupedData, setGroupData] = useState({});
  const [openYear, setOpenYear] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const res = await fetch(
          `${window.location.origin}/certifications.json`,
          { cache: "no-store" },
        );

        const text = await res.text();
        console.log("RAW RESPONSE:", text);

        const data = JSON.parse(text);

        const grouped = {};
        data.forEach((cert) => {
          const year = Number(cert.year);
          if (!grouped[year]) grouped[year] = [];
          grouped[year].push(cert);
        });
        setGroupData(grouped);
        setLoading(false);
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setError(true);
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  const toggleYear = (year) => {
    setOpenYear((prev) => (openYear === year ? null : year));
  };

  if (loading) {
    return <p className="text-center py-10">Loading Certificates...</p>;
  }

  if (error) {
    return <p className="text-center py-10">Failed to load certificates</p>;
  }

  return (
    <section
      id="certifications"
      className="relative w-full duration-500 bg-gray-50 dark:bg-linear-to-b dark:from-zinc-800 dark:to-zinc-800 dark:border-t dark:border-zinc-700 flex flex-col items-center overflow-hidden gap-5 sm:flex-col  lg:flex-col"
    >
      
      <h1 className="mt-14 mb-1 text-2xl font-medium font-lato dark:text-white flex flex-col items-center justify-center gap-6">My Certificates <FaAward size={70} className="text-rose-700" /></h1>
      <span className="text-gray-800 dark:text-white font-medium font-quicksand text-md italic px-4 text-center">Certifications earned through dedicated learning and practical application.</span>
      <div className="w-full mb-10 mx-auto px-4 flex flex-col gap-5 lg:max-w-3xl">
        {Object.keys(groupedData)
          .map(Number)
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="relative  pl-3 border-l-2 border-l-rose-500">
              {/* Timeline Dot */}
              <span className="absolute -left-1.75 top-6 w-3 h-3 bg-rose-700 rounded-full animate-bounce" />

              {/* Year Header */}
              <button
                onClick={() => toggleYear(year)}
                className="w-full flex items-center shadow-sm shadow-zinc-400 rounded-lg justify-between  dark:bg-rose-50 py-4 px-4 text-lg font-semibold font-quicksand text-left dark:text-gray-950"
              >
                {year}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${openYear === year ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {/* Animated Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openYear === year ? "opacity-100 max-h-screen py-4" : "opacity-0 max-h-0 py-0"}`}
              >
                <div className="space-y-4 pb-4 ">
                  {groupedData[year]
                    .sort((a, b) => b.issuedYear - a.issuedYear)
                    .map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl shadow-zinc-400 bg-gray-50 dark:bg-zinc-800 "
                      >
                        {/* Icon */}
                        <FaAward className="text-rose-700 mt-1 shrink-0 animate-bounce" />

                        {/* Content */}
                        <div>
                          <h4 className="font-semibold dark:text-white font-quicksand">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 font-quicksand font-medium mt-1">
                            Issued By: {cert.issuedBy}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 font-quicksand font-medium mt-1">
                            Year: {cert.issuedYear}
                          </p>

                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-5 text-rose-700 hover:underline text-sm italic font-quicksand font-medium"
                          >
                            View Certificate
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Certifications;
