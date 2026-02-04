import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Message sent successfully!");
    const phoneNumber = "2348028230292";
    const text = `Hello my name is ${formData.name}, Phone: ${formData.phone}, Service: ${formData.service}, Message: ${formData.message} `;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen bg-gray-100 py-14 flex flex-col items-center justify-center px-4 gap-5 dark:border-t dark:border-zinc-700 dark:bg-zinc-800 dark:text-white">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6 dark:bg-transparent">
        <h2 className="text-2xl font-bold text-center text-gray-800 font-lato dark:text-white">
          Contact a Mobile Technician
        </h2>
        <p className="text-center text-gray-500 font-medium font-quicksand mt-2 dark:text-white">
          Need phone repairs? Fill the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4 flex flex-col items-center font-quicksand font-medium"
        >
          <input
            type="text"
            name="name"
            placeholder="Fullname"
            required
            onChange={handleChange}
            className="w-full p-3 shadow shadow-gray-400 rounded-lg focus:ring-1 focus:ring-rose-200 outline-none dark:shadow-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            required
            onChange={handleChange}
            className="w-full p-3 shadow shadow-gray-400  rounded-lg focus:ring-1 focus:ring-rose-200 outline-none dark:shadow-white "
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full p-3 shadow shadow-gray-400  rounded-lg focus:ring-1 focus:ring-rose-200 outline-none dark:shadow-white"
          />
          <select
            name="service"
            required
            onChange={handleChange}
            className="w-full p-3 shadow shadow-gray-400  rounded-lg focus:ring-1 focus:ring-rose-200 outline-none dark:shadow-white dark:bg-zinc-500"
          >
            <option value="">Select Service</option>
            <option>Screen replacement</option>
            <option>Battery Replacement</option>
            <option>Charging Port Repair</option>
            <option>Software Issue</option>
            <option>Others</option>
          </select>
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your issue"
            onChange={handleChange}
            className="w-full p-3 shadow shadow-gray-400  rounded-lg focus:ring-1 focus:ring-rose-200 outline-none dark:shadow-white"
          ></textarea>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-60 bg-rose-700 text-white py-3 rounded-lg font-semibold hover:bg-rose-900 transition"
          >
            Send Request
          </button>
        </form>
      </div>

      
    </section>
  );
};

export default Contact;
