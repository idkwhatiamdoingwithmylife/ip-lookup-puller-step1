function sendEncodedIP() {
    const ip = document.getElementById("ipInput").value;
    if (!ip) {
        console.error("No IP entered.");
        return;
    }

    const base64EncodedIP = btoa(ip);
    console.log("Base64 Encoded IP:", base64EncodedIP);

    const binaryEncodedIP = toBinary(base64EncodedIP);
    console.log("Binary Encoded IP:", binaryEncodedIP);

    fetch("https://dont-look-here.vercel.app/api/api.js", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ encodedIP: binaryEncodedIP })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

function toBinary(str) {
    let binary = '';
    for (let i = 0; i < str.length; i++) {
        binary += str.charCodeAt(i).toString(2).padStart(8, '0'); // Convert each char to binary
    }
    return binary;
}
