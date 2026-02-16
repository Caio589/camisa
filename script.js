const API = "https://vigilant-meme-97xrq76rw645fqw4-3000.app.github.dev/";

async function comprar() {
  const res = await fetch(`${API}/pix`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ valor: 79.90 })
  });

  const data = await res.json();

  document.getElementById("pix").innerHTML = `
    <h3>Escaneie o Pix</h3>
    <img src="${data.qrcode}" width="220">
    <p>⏳ Aguardando pagamento...</p>
  `;
}
