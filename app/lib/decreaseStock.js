import decreaseStock from "./decreaseStock";

async function divideItems(itemsMetadata) {
    try {
        for (const item of itemsMetadata.data) {
            console.log("Processing item:", item);

            // Safely parse metadata
            let metadata;
            try {
                metadata = JSON.parse(item.price.product.metadata.additional_data);
            } catch (error) {
                console.error("Error parsing metadata:", error.message, item.price.product.metadata);
                continue; // Skip this item if metadata cannot be parsed
            }

            console.log("Metadata:", metadata);

            // Check and process metadata
            if (!metadata || !metadata.doctype) {
                console.error("Invalid metadata structure:", metadata);
                continue; // Skip this item if metadata is invalid
            }

            // Handle different types of metadata
            switch (metadata.doctype) {
                case "Products":
                    console.log("Handling product purchase for:", metadata);
                    await handleProductPurchase(metadata);
                    break;
                case "Course":
                    console.log("Handling course purchase for:", metadata);
                    await handleCoursePurchase(metadata);
                    break;
                default:
                    console.warn("Unhandled doctype:", metadata.doctype);
                    break;
            }
        }
    } catch (error) {
        console.error("Error in divideItems:", error.message);
    }
}

async function handleProductPurchase(metadata) {
    try {
        console.log("Calling decreaseStock for product:", metadata);
        const result = await decreaseStock(metadata);
        console.log("Stock update result:", result);
    } catch (error) {
        console.error("Error handling product purchase:", error.message);
    }
}

async function handleCoursePurchase(metadata) {
    try {
        console.log("Course purchase processing:", metadata);
        // Add logic for handling courses here
    } catch (error) {
        console.error("Error handling course purchase:", error.message);
    }
}

module.exports = {
    divideItems,
};
