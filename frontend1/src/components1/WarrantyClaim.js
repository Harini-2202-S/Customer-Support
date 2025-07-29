import React, { useState } from "react";

const WarrantyClaim = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productModel: "",
    issueDescription: "",
    proofOfPurchase: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      proofOfPurchase: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div class="container">
      <h1>WARRANTY CLAIM</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="productModel"
          value={formData.productModel}
          onChange={handleChange}
          placeholder="Product Model Number"
          required
        />
        <textarea
          name="issueDescription"
          value={formData.issueDescription}
          onChange={handleChange}
          placeholder="Describe your issue"
          required
        ></textarea>
        <input
          type="file"
          name="proofOfPurchase"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WarrantyClaim;
