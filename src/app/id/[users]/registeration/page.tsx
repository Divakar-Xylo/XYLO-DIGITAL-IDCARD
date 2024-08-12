"use client"
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    externalLinks: [{ id: Date.now(), name: "", url: "" }],
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleExternalLinkChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedLinks = [...formData.externalLinks];
    updatedLinks[index] = { ...updatedLinks[index], [name]: value };
    setFormData({
      ...formData,
      externalLinks: updatedLinks,
    });
  };

  const addExternalLink = () => {
    setFormData({
      ...formData,
      externalLinks: [
        ...formData.externalLinks,
        { id: Date.now(), name: "", url: "" },
      ],
    });
  };

  const removeExternalLink = (index: number) => {
    const updatedLinks = formData.externalLinks.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      externalLinks: updatedLinks,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex w-full max-w-4xl">
        <div className="w-full bg-gradient-to-r from-blue-500 via-blue-300 to-white p-10 text-white flex flex-col justify-center items-center">
          <img src="/logo.png" alt="Logo" className="mb-6" />
        </div>
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">External Links</h3>
            {formData.externalLinks.map((link, index) => (
              <div key={link.id} className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={link.name}
                  onChange={(e) => handleExternalLinkChange(index, e)}
                  placeholder="Platform Name (e.g., LinkedIn)"
                  className="w-full p-2 mb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
                />
                <input
                  type="url"
                  name="url"
                  value={link.url}
                  onChange={(e) => handleExternalLinkChange(index, e)}
                  placeholder="URL"
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 bg-transparent"
                />
                {formData.externalLinks.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExternalLink(index)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    Remove Link
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addExternalLink}
              className="mb-6 bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 w-full"
            >
              Add Another Link
            </button>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-900 to-blue-300 text-white p-3 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
