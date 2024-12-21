import fetch from "node-fetch";

export default async function decreaseStock(metadata) {
    try {
        console.log("Base URL:", process.env.NEXT_PUBLIC_BASE_URL);

        const url = "https://backend.ea-dental.com/api/method/ea_dental.api.decrease_stock";

        console.log("Request Payload:", {
            doctype: metadata.doctype,
            docname: metadata.id,
            child_id: metadata.child_id,
            quan: metadata.quantity,
        });

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${"f159677cbad15a9"}:${"cda008a8375b35e"}`
                ).toString("base64")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                doctype: metadata.doctype,
                docname: metadata.id,
                child_id: metadata.child_id,
                quan: metadata.quantity,
            }),
        });

        console.log("Raw Response:", response);

        if (!response.ok) {
            console.error(`❌ HTTP Error: ${response.status} ${response.statusText}`);
            const errorData = await response.json();
            console.error("❌ Response Error Details:", errorData);
            return;
        }

        const responseData = await response.json();

        console.log("Parsed Response:", responseData);

        if (responseData.message?.status === "success") {
            console.log("✅ Stock updated successfully:", responseData.message.updated_stock);
            return;
        } else {
            console.error("❌ Error updating stock:", responseData.message);
            return;
        }
    } catch (error) {
        console.error("❌ Unexpected Error:", error.message);
        console.error("❌ Stack Trace:", error.stack);
    }
}
