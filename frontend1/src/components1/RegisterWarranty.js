import React, { useState } from "react";
import "./RegisterWarranty.css";

function RegisterWarranty() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productModel: "",
    purchaseDate: "",
    comments: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div class="container">
      <h1>REGISTER WARRANTY</h1>
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
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="proofOfPurchase"
          onChange={handleFileChange}
          required
        />
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Comments or Additional Information"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegisterWarranty;
