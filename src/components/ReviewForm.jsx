import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";

const ReviewForm = () => {
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "reviews"), {
        name: form.name,
        rating: Number(form.rating),
        comment: form.comment,
        createdAt: serverTimestamp(),
      });

      toast.success("Submitted! Thank You For Your Review.");
      setForm({ name: "", rating: 5, comment: "" });
    } catch (err) {
      toast.error(err.message || "Submission failed");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-transparent p-6 rounded-xl shadow-md max-w-lg mx-auto flex flex-col items-center justify-center dark:shadow-white/40"
    >
      <h3 className="text-xl font-bold font-lato mb-4 dark:text-white">
        Leave a Review
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        required
        value={form.name}
        className="w-full p-3 shadow-sm shadow-gray-500 rounded-lg mb-3 dark:text-white outline-none"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
        className="w-full p-3 shadow-sm shadow-gray-500 rounded-lg mb-3 dark:bg-zinc-600 dark:text-white"
      >
        {[5, 4, 3, 2, 1].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Your review"
        required
        value={form.comment}
        className="w-full row-4 p-3 shadow-sm shadow-gray-500 rounded-lg mb-3 dark:bg-transparent dark:text-white outline-none"
        onChange={(e) => setForm({ ...form, comment: e.target.value })}
      />

      <button
        disabled={loading}
        className="w-full bg-rose-700 text-white py-3 rounded-lg mt-4 hover:opacity-80 disabled:opacity-60 flex items-center justify-center gap-5"
      >
        {loading ? (
          <>
            <ImSpinner2 className="animate-spin text-lg" />
            Submitting...
          </>
        ) : (
          "Submit Review"
        )}
      </button>
    </form>
  );
};

export default ReviewForm;
