import { React, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaStar } from "react-icons/fa";
import ReviewForm from "../components/ReviewForm";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(
        collection(db, "reviews"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      setReviews(snapshot.docs.map((doc) => doc.data()));
    };
    fetchReviews();
  }, []);

  return (
    <section id="reviews"
      className="relative min-h-screen duration-500 gap-10 py-15 px-6 md:px-12 lg:px-60 bg-linear-to-b 
      from-gray-100 to-white dark:border-t dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-800"
    >
      <h2 className="text-3xl font-bold font-lato text-center mb-6 dark:text-white">
        Trusted by Our Clients
      </h2>

      {/* Trust Badge */}
      <div className="flex justify-center mb-10 items-center gap-1">
        <IoMdCheckmarkCircleOutline size={35} className="text-rose-700" />
        <p className="text-2xl font-medium font-nunito  dark:text-white">Reviews</p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i} className="px-4">
            <div className="bg-white mb-10 dark:bg-zinc-700 p-6 rounded-xl shadow-lg fade-in">
              <div className="flex items-center gap-5 mb-6">
                <FaUser size={35} className="dark:text-white"/>
                <div >
                  <h4 className="font-semibold mb-1 dark:text-white">{r.name}</h4>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(r.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-800 dark:text-gray-300 text-sm font-medium font-quicksand">
                “{r.comment}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ReviewForm/>
    </section>
  )
    
};

export default MyReviews;