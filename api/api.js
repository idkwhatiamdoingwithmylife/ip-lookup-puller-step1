function sendEncodedIP() {
    const ipInput = document.getElementById("ipInput");
    if (!ipInput) {
        console.error("IP input field not found.");
        return;
    }

    const ip = ipInput.value.trim();
    if (!ip) {
        console.error("No IP entered.");
        return;
    }

    try {
        const encodedIP = btoa(ip);
        console.log("Encoded IP:", encodedIP);

        fetch("https://dont-look-here-git-main-idkwhatiamdoingwithmylifes-projects.vercel.app/api/api.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ encodedIP })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Server Response:", data);
        })
        .catch(error => {
            console.error("Error sending request:", error);
        });
    } catch (error) {
        console.error("Encoding Error:", error);
    }
}
