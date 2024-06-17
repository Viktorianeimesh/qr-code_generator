import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './style.css';

export const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div className="code_generator-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          className="code_input"
          type="text" 
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="code_button"
          onClick={handleGenerateQrCode}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode 
          id="qr-code-value"
          value={qrCode}
          size={400}
          bgColor="#fff"
        />
      </div>
    </div>
  )
}
