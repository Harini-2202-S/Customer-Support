import { useState } from "react";

function WarrantyReg(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [chnl, setChnl] = useState("");
  const arr = [name, email, phone, pid, pname, chnl];
  const handleClick = () => {
    if (pid.length != 12 || pid[0] != "p" || pid[11] != "d")
      alert("Invalid Product Id");
    else props.getState(arr);
  };
  return (
    <div class="con1" style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input
        onChange={(event) => setName(event.target.value)}
        class="in1"
        type="text"
        required
        placeholder="Enter Name"
      />
      <input
        onChange={(event) => setEmail(event.target.value)}
        class="in1"
        type="email"
        required
        placeholder="Enter Email"
      />
      <input
        onChange={(event) => setPhone(event.target.value)}
        class="in1"
        type="text"
        required
        placeholder="Enter Phone Number"
      />
      <input
        onChange={(event) => setPid(event.target.value)}
        class="in1"
        type="text"
        required
        placeholder="Enter Product Id"
      />
      <input
        onChange={(event) => setPname(event.target.value)}
        class="in1"
        type="text"
        required
        placeholder="Enter Product Name"
      />
      <input
        onChange={(event) => setChnl(event.target.value)}
        class="in1"
        type="text"
        required
        placeholder="Enter Channel (Eg. Amazon, Flipkart)"
      />
      <button onClick={handleClick} type="submit" class="mybtn">
        Submit
      </button>
    </div>
  );
}
export default WarrantyReg;

// const data = {
//   name: arr[0],
//   email: arr[1],
//   phone: arr[2],
//   product_id: arr[3],
//   product_name: arr[4],
//   channel: arr[5],
//   ticket: "Warranty Registration",
//   ticket_type: "Reg",
// };
