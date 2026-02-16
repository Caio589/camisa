module.exports = async (req, res) => {
  const { valor } = req.body;

  // Pix simples (chave fixa) — funciona para vender já
  const chavePix = "SUA_CHAVE_PIX_AQUI";
  const textoPix = `PIX|${chavePix}|${valor}`;

  res.json({
    qrcode: `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(textoPix)}`
  });
};
