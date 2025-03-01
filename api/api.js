// This function fetches the user's IP address from a public API and logs it to the console.
async function getUserIP() {
    try {
        // Fetching the user's IP address using the ipify API
        const response = await fetch('https://api.ipify.org?format=json');
        
        // If the request is successful, we extract the IP address from the response
        if (response.ok) {
            const data = await response.json();
            console.log('Your IP Address is:', data.ip);
        } else {
            console.error('Failed to retrieve IP address');
        }
    } catch (error) {
        // Handling any errors that occur during the fetch request
        console.error('Error fetching IP address:', error);
    }
}

// Call the function to get the user's IP address
getUserIP();
