import React, { useState } from "react";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    graduationYear: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //API
    setSubmitStatus("success");
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className=""
      style={{
        color: "",
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
      }}
    >
      <div className="">
        <div className="text-center">
          <h1 className="fs-1" style={{ color: "pink" }}>
            Contact Us
          </h1>
          <p className="">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="container mx-auto px-4 m-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 ">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="ms-4">
                  <div className="flex items-start space-x-4s">
                    <div>
                      <h3>Phone</h3>
                      <p>+1 (555) 123-4567</p>
                      <p>+1 (555) 765-4321</p>
                    </div>
                  </div>

                  <div className="">
                    <div>
                      <h3>Email</h3>
                      <p>alumni@university.edu</p>
                      <p>support@alumni.edu</p>
                    </div>
                  </div>

                  <div className="">
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">
                      Alumni Relations Office
                      <br />
                      123 University Avenue
                      <br />
                      Campus Building, Room 456
                      <br />
                      City, State 12345
                    </p>
                  </div>

                  <div className="">
                    <h3>Office Hours</h3>
                    <p>
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="mt-8 ms-4">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex m-3">
                    <a href="" className="">
                      <Linkedin
                        className="w-6 h-6 "
                        style={{ color: "black" }}
                      />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Facebook
                        className="w-6 h-6"
                        style={{ color: "black" }}
                      />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Twitter className="w-6 h-6" style={{ color: "black" }} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Instagram
                        className="w-6 h-6"
                        style={{ color: "black" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 mt-5">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "pink" }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6mb-5">
                  <div className="">
                    <div className="">
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-5">
                        Graduation Year
                      </label>
                      <input
                        type="text"
                        name="graduationYear"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={formData.graduationYear}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark add-btn">
                    Submit
                  </button>

                  {submitStatus === "success" && (
                    <div className="" style={{ color: "green" }}>
                      Thank you for your message. We'll get back to you soon!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
