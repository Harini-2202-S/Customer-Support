import WarrantyClaimForm from "./WarrantyClaimForm";
import { useState, useEffect } from "react";
import "./WarrantyClaimForm.css";
import Axios from "axios";

function Wcf() {
  const [arr, setArr] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getState = (childata) => {
    setArr(childata);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: arr[0],
      email: arr[1],
      phone: arr[2],
      product_id: arr[3],
      product_name: arr[4],
      channel: arr[5],
      ticket: "Warranty Claim",
      ticket_type: "Claim",
    };
    const st = arr[3];
    if (st.length != 12 || st[0] != "p" || st[11] != "d") {
      alert("Invalid Product Id");
      return null;
    }
    Axios.post("https://customer-support-a22o.onrender.com/supportRoute/create-support", data)
      .then((res) => {
        if (res.status === 200) {
          setIsSubmitted(true);
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (isSubmitted) {
      alert("Query submitted successfully");
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <WarrantyClaimForm getState={getState} />
    </form>
  );
}

export default Wcf;
