const express = require("express");
const cors = require("cors");
const { CourierClient } = require("@trycourier/courier");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(cors());

const courier = CourierClient({
  authorizationToken: "YOUR_COURIER_AUTH_TOKEN",
});

app.post("/send-email", async (req, res) => {
  const { email, templateId, name } = req.body;

  try {
    const { messageId } = await courier.send({
      message: {
        to: {
          email: email,
        },
        template: templateId,
        data: {
          name: name,
        },
      },
    });

    res.send({ success: true, messageId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to send email" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
