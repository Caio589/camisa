const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/pix", (req, res) => {
  const { valor } = req.body;

  res.json({
    qrcode: `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=PIX-${valor}`
  });
});

app.listen(3000, () => {
  console.log("🚀 Backend rodando em http://localhost:3000");
});
