import { useState } from "react";
import QRCode from "react-qr-code";
import "./QR-Code.css"

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="container">
      <h1 className="title">My QR Code Generator</h1>
      <div className="input-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          className="input-field"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className="generate-button"
        >
         Make QR Code
        </button>
      </div>
      <div className="qr-code-container">
        <QRCode 
              id="qr-code-value" 
              value={qrCode} 
              size={450} 
              bgColor="white" 
              fgColor="black"
              />
      </div>
    </div>
  );
}
