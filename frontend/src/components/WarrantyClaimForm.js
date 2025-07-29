import React, { useState } from "react";
import "./WarrantyClaimForm.css";

const WarrantyClaimForm = (props) => {
  const { getState } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [chnl, setChnl] = useState("");
  const arr = [name, email, phone, pid, pname, chnl];

  const handleClick = () => {
    const st = pid;
    if (st.length != 12 || st[0] != "p" || st[11] != "d")
      alert("Invalid Product Id");
    getState(arr);
  };

  return (
    <div className="form-container">
      <h2 className="header">Warranty Claim Form</h2>
      <div className="form-group">
        <label className="label">Full Name:</label>
        <input
          required
          type="text"
          name="fullName"
          onChange={(event) => setName(event.target.value)}
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Email Address:</label>
        <input
          required
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Phone Number:</label>
        <input
          required
          type="tel"
          name="phoneNumber"
          onChange={(event) => setPhone(event.target.value)}
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Address:</label>
        <textarea name="address" className="textarea" />
      </div>
      <div className="form-group">
        <label className="label">Product Model / Name:</label>
        <input
          required
          type="text"
          name="productModel"
          onChange={(event) => setPname(event.target.value)}
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Serial Number:</label>
        <input
          required
          type="text"
          name="serialNumber"
          onChange={(event) => setPid(event.target.value)}
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Date of Purchase:</label>
        <input
          required
          type="date"
          name="dateOfPurchase"
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">
          Channel of Purchase (Eg: Amazon, FlipKart):
        </label>
        <input
          required
          type="text"
          name="placeOfPurchase"
          onChange={(event) => setChnl(event.target.value)}
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Proof of Purchase:</label>
        <input
          required
          type="file"
          name="proofOfPurchase"
          className="input required"
        />
      </div>
      <div className="form-group">
        <label className="label">Issue Category:</label>
        <select name="issueCategory" className="input required">
          <option value="">Select an issue</option>
          <option value="soundQuality">Sound Quality</option>
          <option value="connectivity">Connectivity</option>
          <option value="battery">Battery</option>
          <option value="physicalDamage">Physical Damage</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">Detailed Description:</label>
        <textarea name="detailedDescription" className="textarea" />
      </div>
      <div className="form-group">
        <label className="label">
          <input required type="checkbox" name="troubleshootingSteps" />
          Have you tried any troubleshooting steps?
        </label>
      </div>
      <div className="form-group">
        <label className="label">
          <input required type="checkbox" name="previousRepairs" />
          Has the product been repaired before?
        </label>
      </div>
      <div className="form-group">
        <label className="label">Preferred Contact Method:</label>
        <select name="preferredContactMethod" className="input required">
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">
          <input required type="checkbox" name="termsAccepted" />I agree to the
          terms and conditions
        </label>
      </div>
      <button type="submit" onClick={handleClick} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default WarrantyClaimForm;
