const axios = require("axios");

export default async function decreaseStock(metadata) {
    try {
        // Debug environment variables
        console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
        console.log("Username:", process.env.NEXT_PUBLIC_API_USERNAME);
        console.log("Password:", process.env.NEXT_PUBLIC_API_PASSWORD);

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/method/ea_dental.api.decrease_stock`;
        console.log("Request URL:", url);
        console.log("Metadata being sent:", metadata);

        const response = await axios.post(
            url,
            metadata,
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        `${process.env.NEXT_PUBLIC_API_USERNAME}:${process.env.NEXT_PUBLIC_API_PASSWORD}`
                    ).toString("base64")}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("API Response:", response.data);

        if (response.data.status === "success") {
            console.log("✅ Stock updated successfully:", response.data.updated_stock);
        } else {
            console.error("❌ Error updating stock:", response.data.message);
        }
    } catch (error) {
        if (error.response) {
            console.error("❌ API Response Error:", error.response.data);
            console.error("❌ Status Code:", error.response.status);
        } else if (error.request) {
            console.error("❌ No Response from API:", error.request);
        } else {
            console.error("❌ Request Error:", error.message);
        }
    }
}

// Example Usage
const metadata = {
    doctype: "Products", // Replace with your doctype
    docname: "Complete Kit",     // Replace with your document name
    child_id: "f587b361c2", // Replace with your child table row ID
};

