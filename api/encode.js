function sendEncodedIP() {
    const ip = document.getElementById("ipInput").value;
    if (!ip) {
        console.error("No IP entered.");
        return;
    }

    const encodedIP = encodeHex(ip); // Encode in Hex
    console.log("Encoded IP (Hex):", encodedIP);

    fetch("https://dont-look-here.vercel.app/api/api.js", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ encodedIP })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function encodeHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += '\\x' + str.charCodeAt(i).toString(16);
    }
    return hex;
}
