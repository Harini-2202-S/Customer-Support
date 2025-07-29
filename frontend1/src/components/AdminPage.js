import Axios from "axios";
import { useEffect, useState } from "react";
import QueryList from "./QueryList";
import "./AdminPage.css";
function AdminPage() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:4000/supportRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      return <QueryList obj={val} />;
    });
  };

  return (
    <div class="bodyo">
      <tableyo class="tableyo tableyo-bordered tableyo-">
        <thead class="theadyo">
          <tr class="tryo">
            <th class="text-centeryo">Name</th>
            <th class="text-centeryo">Email</th>
            <th class="text-centeryo">Phone Number</th>
            <th class="text-centeryo">Product Id</th>
            <th class="text-centeryo">Product Name</th>
            <th class="text-centeryo">Channel</th>
            <th class="text-centeryo">Ticket</th>
            <th class="text-centeryo">Ticket Type</th>
            <th class="text-centeryo">Action</th>
          </tr>
        </thead>
        <tbody class="tbodyo">{ListItems()}</tbody>
      </tableyo>
    </div>
  );
}
export default AdminPage;
