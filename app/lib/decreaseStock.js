const axios = require("axios");

  async function decreaseStock(metadata) {
    try {
        // Debug environment variables
        console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

        const url = `${"https://backend.ea-dental.com"}/api/method/ea_dental.api.decrease_stock`;

        console.log(metadata.doctype, metadata.id, metadata.child_id)

        const response = await axios.post(
            url,
            {
                doctype: metadata.doctype, 
                docname: metadata.id,
                child_id: metadata.child_id,
            },
            {
                headers: {
                    Authorization: `Basic ${Buffer.from(
                        `${"f159677cbad15a9"}:${"cda008a8375b35e"}`
                    ).toString("base64")}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("API Response:", response.data);

        if (response.data.message.status === "success") {
            console.log("✅ Stock updated successfully:", response.data.message.updated_stock);
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

module.exports = decreaseStock;
