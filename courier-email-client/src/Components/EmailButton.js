import React from "react";

const EmailButton = () => {
  const sendEmail = async () => {
    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "YOUR_EMAIL",
        templateId: "YOUR_AUTH_TOKEN",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return <button onClick={sendEmail}>Send email</button>;
};

export default EmailButton;
