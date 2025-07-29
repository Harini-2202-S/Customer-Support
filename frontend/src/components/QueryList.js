import Axios from "axios";
function QueryList(props) {
  const {
    _id,
    name,
    email,
    phone,
    product_id,
    product_name,
    channel,
    ticket,
    ticket_type,
  } = props.obj;
  const handleAccept = async (e) => {
    e.preventDefault();
    const eme = email;
    const sub = `${ticket} Successful for Your ${product_name}`;
    let str = "";
    const us1 =
      "Your warranty is now active and you can rest assured that we are here to support you with any issues that may arise during the warranty period.";
    const us2 = "Your warranty is now claimed hope you enjoy our product.";
    let res = "";
    if (ticket_type === "Claim") {
      str = "Claim";
      res = us2;
    } else {
      str = "Registration";
      res = us1;
    }
    const t = `Dear ${name},

We are pleased to inform you that your ${str} for the warranty of your ${product_name} has been successfully completed.
${res}
Product Details:

Product Name: ${product_name}
Product ID: ${product_id}
Thank you for choosing our product. 


If you have any questions or need further assistance, please do not hesitate to contact our customer support team.

Best regards,

SonicBoom
`;
    try {
      const response = await Axios.post(
        "http://localhost:4000/supportRoute/send-email",
        {
          eme,
          sub,
          t,
        }
      );
      alert(response.data);
    } catch (error) {
      alert(
        `Error sending email: ${
          error.response ? error.response.data : error.message
        }`
      );
    }

    Axios.delete("http://localhost:4000/supportRoute/delete-support/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Record is deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleReject = async (e) => {
    e.preventDefault();
    const eme = email;
    const sub = `${ticket} Unsuccessful for Your ${product_name}`;
    const t = `Dear ${name},

We regret to inform you that your registration/claim for the warranty of your ${product_name} has been unsuccessful.

Product Details:

Product Name: ${product_name}
Product ID: ${product_id}
Unfortunately, we were unable to process your warranty registration/claim.

Please review your registration/claim details and try submitting again. If you require assistance or have any questions regarding the registration process, feel free to contact our customer support team. We are here to help and ensure you receive the necessary support.

We apologize for any inconvenience this may have caused and appreciate your understanding.

Best regards,

Sonic Boom`;
    try {
      const response = await Axios.post(
        "http://localhost:4000/supportRoute/send-email",
        {
          eme,
          sub,
          t,
        }
      );
      alert(response.data);
    } catch (error) {
      alert(
        `Error sending email: ${
          error.response ? error.response.data : error.message
        }`
      );
    }
    Axios.delete("http://localhost:4000/supportRoute/delete-support/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Record is deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <tr class="tryo">
      <td class="tdyo">{name}</td>
      <td class="tdyo">{email}</td>
      <td class="tdyo">{phone}</td>
      <td class="tdyo">{product_id}</td>
      <td class="tdyo">{product_name}</td>
      <td class="tdyo">{channel}</td>
      <td class="tdyo">{ticket}</td>
      <td class="tdyo">{ticket_type}</td>
      <td class="tdyo">
        <button type="submit" class="acc" onClick={handleAccept}>
          Accept
        </button>
        <button type="submit" class="rej" onClick={handleReject}>
          Reject
        </button>
      </td>
    </tr>
  );
}
export default QueryList;
