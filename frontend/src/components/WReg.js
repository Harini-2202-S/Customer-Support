import WarrantyReg from "./WarrantyReg";
import "./WReg.css";
import { useState, useEffect } from "react";
import Axios from "axios";
function WReg() {
  const [arr, setArr] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getState = (childata) => {
    setArr(childata);
  };

  const handleSubmit = (event) => {
    const pid = arr[3];
    if (pid.length != 12 || pid[0] != "p" || pid[11] != "d") {
      alert("Invalid Product Id");
      return null;
    }
    event.preventDefault();

    const data = {
      name: arr[0],
      email: arr[1],
      phone: arr[2],
      product_id: arr[3],
      product_name: arr[4],
      channel: arr[5],
      ticket: "Warranty Registration",
      ticket_type: "Reg",
    };

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
    <div class="conn">
      <form onSubmit={handleSubmit} class="con">
        <div class="top myh1">
          <h1 class="tleft myh1">S</h1>
          <h1 class="myh1">onic</h1>
          <h1 class="myh1">G</h1>
          <h1 class="myh1">ram🎶</h1>
        </div>
        <WarrantyReg getState={getState} />
      </form>
    </div>
  );
}
export default WReg;
