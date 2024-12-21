const axios = require("axios");

export default async function decreaseStock(metadata) {
    try {
        console.log(process.env.NEXT_PUBLIC_BASE_URL)
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/method/ea_dental.api.decrease_stock`,
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

        if (response.data.status === "success") {
            console.log("✅ Stock updated successfully:", response.data.updated_stock);
        } else {
            console.error("❌ Error updating stock:", response.data.message);
        }
    } catch (error) {
        console.error("❌ Error calling API:", error.response?.data || error.message);
    }
}

// Example Usage
const metadata = {
    doctype: "Products", // Replace with your doctype
    docname: "Complete Kit",     // Replace with your document name
    child_id: "f587b361c2", // Replace with your child table row ID
};
