import React from "react";  // <-- Import React here
import PropTypes from "prop-types";
import "../index.css";
import "aos/dist/aos.css";
import Robot from "../assets/Image/contact1.png";
import Navbar from "../MainComponent/Navbar";
const MyForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      {/* Name Field */}
      <div className="flex flex-col sm:flex-row items-center">
        <label
          htmlFor="name"
          className="w-full sm:w-1/2 text-lg text-black mb-2 sm:mb-0"
        >
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full sm:w-1/2 text-lg bg-white text-black opacity-90 border-b-2 rounded-sm border-gray-600 focus:outline-none"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col sm:flex-row items-center">
        <label
          htmlFor="email"
          className="w-full sm:w-1/2 text-lg text-black mb-2 sm:mb-0"
        >
          Email Id:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full sm:w-1/2 text-lg bg-white text-black opacity-90 border-b-2 rounded-sm border-gray-600 focus:outline-none"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col sm:flex-row items-center">
        <label
          htmlFor="phoneno"
          className="w-full sm:w-1/2 text-lg text-black mb-2 sm:mb-0"
        >
          Phone No:
        </label>
        <input
          type="text"
          id="phoneno"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleChange}
          className="w-full sm:w-1/2 text-lg bg-white text-black opacity-90 border-b-2 rounded-sm border-gray-600 focus:outline-none"
        />
      </div>

      {/* Select Service */}
      <div className="flex flex-col sm:flex-row items-center">
        <label
          htmlFor="service"
          className="w-full sm:w-1/2 text-lg text-black mb-2 sm:mb-0"
        >
          Select Service:
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full sm:w-1/2 text-lg bg-white text-black opacity-90 border-b-2 rounded-sm border-gray-600 focus:outline-none"
        >
          <option value="">Select a Service</option>
          <option value="Website Development">Website Development</option>
          <option value="Facebook & Google Ads">Facebook & Google Ads</option>
          <option value="Social Media Management">Social Media Management</option>
          <option value="Graphic Design">Graphic Design (Logo/Banner)</option>
          <option value="Lead Generation">Lead Generation</option>
          <option value="Branding">Branding</option>
          <option value="Email Marketing">Email Marketing</option>
        </select>
      </div>

      {/* Message Field */}
      <div className="flex flex-col sm:flex-row items-center">
        <label
          htmlFor="message"
          className="w-full sm:w-1/2 text-lg text-black mb-2 sm:mb-0"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full sm:w-1/2 text-lg bg-white text-black opacity-90 border-b-2 rounded-sm border-gray-600 focus:outline-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-5 py-3 bg-textcolor text-white font-semibold rounded-md"
      >
        🚀 Get a Free Consultation!
      </button>
    </form>
  );
};

// PropTypes for MyForm
MyForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneno: PropTypes.string,
    service: PropTypes.string.isRequired,
    message: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phoneno: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `Hello, I would like to inquire about your services.\n\n
🔹 Name: ${formData.name}\n
🔹 Email: ${formData.email}\n
🔹 Phone No: ${formData.phoneno}\n
🔹 Service: ${formData.service}\n
🔹 Message: ${formData.message}\n
Please let me know how you can help.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://api.whatsapp.com/send?phone=7581001715&text=${encodedMessage}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      phoneno: "",
      service: "",
      message: "",
    });
  };

  // If onClose prop is unused, you can remove it or add logic here if needed

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col lg:flex-row bg-white items-center align-middle justify-center"
        id="Contact"
      >
        <div className="lg:w-1/2 sm:p-0 flex justify-center items-center align-middle hidden lg:block">
          <img
            src={Robot}
            alt="Contact"
            className="w-full lg:w-3/4 h-auto max-h-[75vh] object-contain items-center"
          />
        </div>
        <div
          className="lg:w-1/2 p-8 flex flex-col items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-black">
              GET IN TOUCH
            </h1>
            <div className="w-1/2 h-1 bg-textcolor mx-auto my-4"></div>
            <p className="text-lg text-black">
              Reach out to us for a free consultation and discover how our
              services can help you.
            </p>
          </div>
          <div className="md:w-4/5 border border-gray-700 rounded-lg p-6 text-black">
            <MyForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// PropTypes for Contact
Contact.propTypes = {
  onClose: PropTypes.func, // mark as optional
};

export default Contact;
