export default async (req, res) => {
    const { ip } = req.query;

    if (!ip) {
        return res.status(400).json({ error: "No IP address provided." });
    }

    try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.status !== "success") {
            return res.status(400).json({ error: "Invalid IP address or lookup failed." });
        }

        return res.json({
            ip: data.query,
            country: data.country,
            region: data.regionName,
            city: data.city,
            isp: data.isp,
            timezone: data.timezone,
            lat: data.lat,
            lon: data.lon
        });

    } catch (error) {
        console.error("Error fetching IP information:", error);
        return res.status(500).json({ error: "Failed to fetch IP information." });
    }
};
