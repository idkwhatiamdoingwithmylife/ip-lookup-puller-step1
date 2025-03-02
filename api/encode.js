function sendEncodedIP() {
    const ip = document.getElementById("ipInput").value;
    if (!ip) {
        console.error("No IP entered.");
        return;
    }

    const encodedIP = btoa(ip);
    console.log("Encoded IP:", encodedIP);

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
