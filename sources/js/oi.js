const urlBase = "https://api.qr-code-generator.com/v1/create?access-token=";
const apiKey =
  "RX7OdaI92AqGWOYsKZGoS-gmRUsix5FOlQ-DTnDxNJ4ccb3h9PpdVrrZFEjApgsw";

async function createFormData() {
  const formData = new FormData();

  const qrCodeData = {
    frame_name: "my website",
    qr_code_text: "https://henzinho2000.github.io/Lista",
    image_format: "SVG",
    qr_code_logo: "../styles/images/1.svg",
  };

  formData.append("frame_name", qrCodeData.frame_name);
  formData.append("qr_code_text", qrCodeData.qr_code_text);
  formData.append("image_format", qrCodeData.image_format);
  formData.append("qr_code_logo", qrCodeData.qr_code_logo);

  return formData;
}

async function generateTheQrCode() {
  const apiTotal = urlBase + apiKey;
  const formData = await createFormData();
  const response = await fetch(apiTotal, {
    method: "POST",
    body: JSON.stringify(formData),
  });
  try {
    if (response.ok) {
      const responseText = await response.text();
      return responseText;
    }
    throw new Error("request failed");
  } catch (e) {
    console.error(e);
    return false;
  }
}

const body = document.querySelector("body");
body.addEventListener("click", async () => {
  try {
    const qrcode = await generateTheQrCode();
    if (qrcode) {
      const div = document.createElement("div");
      div.innnerHTML = qrcode;
      body.append(div);
    }
  } catch (e) {
    console.error("Erro ao Processar o QR CODE", e);
  }
});
