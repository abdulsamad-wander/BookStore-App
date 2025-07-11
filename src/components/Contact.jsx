import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Blank from "./Blank";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const searchData = document
      .querySelector("[data-search]")
      ?.getAttribute("data-search");
    if (searchData) {
      setSearch(searchData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_x0r70dd",
        "template_iwbygpg",
        {
          form_name: form.name,
          to_name: "Abdul Samad",
          from_email: form.email,
          to_email: "abdullsamad3800@gmail.com",
          message: form.message,
        },
        "ew7WQtOCHRIphD-1Q"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank You, I'll reply You soon!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        toast.error("❌ Something went wrong.");
        console.error(error);
      });
  };

  return (
    <>
      <Blank />
      <div className="min-h-screen mt-24 flex items-center justify-center mb-5 px-6">
        {search && (
          <div className="text-center bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              You searched for <span className="font-semibold">"{search}"</span>
              .
              <Link
                href="/books"
                className="text-blue-600 hover:underline ml-1"
              >
                View search results →
              </Link>
            </p>
          </div>
        )}
        <div className="w-full max-w-lg bg-gradient-to-br from-[#111827] to-[#1f2937] p-8 rounded-2xl shadow-2xl">
          <div className="ml-2 mb-2">
            <p className="text-[#64ffda] text-base">Get in touch</p>
            <h3 className="text-white text-2xl font-semibold">Contact Me</h3>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-5"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-1 ml-1 text-base">
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-[#8892b0] text-white rounded-md outline-none border-0 hover:border border-[#64ffda]/40 focus:border-[#64ffda] text-base"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-1 ml-1 text-base">
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-[#8892b0] text-white rounded-md outline-none border-0 hover:border border-[#64ffda]/40 focus:border-[#64ffda] text-base"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-1 ml-1 text-base">
                Your Message
              </span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="bg-[#1e293b] py-3 px-4 placeholder:text-[#8892b0] text-white rounded-md outline-none border-0 hover:border border-[#64ffda]/40 focus:border-[#64ffda] text-base"
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#64ffda] to-[#4facfe] py-2.5 px-6 rounded-md text-[#0a192f] font-semibold shadow-md hover:shadow-[#64ffda]/40 transition-all duration-300 w-fit self-start mt-2 text-base"
            >
              {loading ? (
                <span className="flex items-center text-base">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0a192f]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
      <Blank />
    </>
  );
};

export default Contact;
