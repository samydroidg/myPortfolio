import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // service_2uai2yb

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
        await emailjs.send(
        "service_2uai2yb", 
        "template_6x1cbha", 
        {
        from_name: form.name,
        to_name: "Gourav Ojha",
        from_email: form.email,
        to_email: "gouravojha.2005@gmail.com",
        message: form.message,
      },
      'D2LIuzyZTAixF-kNF'
    )

      setLoading(false)

      alert('Your Message has been sent')

      setForm({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      setLoading(false)
      console.log(error)
      alert('Something went wrong...');
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="Terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you are looking to build a new website, improve your
            existing platform, or bring a unique project to life, I'm here to
            help.
          </p>
          <form
            action=""
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                className="field-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="example"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                className="field-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@abc.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Enter Your Message Here..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
