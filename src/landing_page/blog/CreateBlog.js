import React, { useState } from "react";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    author: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="row"
      style={{
        color: "pink",
        fontFamily: "Bebas Neue, sans-serif",
        fontWeight: "600",
        fontStyle: "normal",
        marginTop: "180px",
      }}
    >
      <div className="col-8 offset-2">
        <h3>Create a New Blog</h3>
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Add a catchy title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <div className="valid-feedback">Title looks good</div>
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <div className="invalid-feedback">
              Please enter short description
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Upload Blog Image
            </label>
            <input
              name="image"
              type="file"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="mb-3 col-md-4">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                name="author"
                type="text"
                placeholder="Jan Doe"
                className="form-control"
                value={formData.author}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Author name is required</div>
            </div>

            <div className="mb-3 col-md-8">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                name="date"
                type="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Please select a valid date</div>
            </div>
          </div>

          <button type="submit" className="btn btn-dark add-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
