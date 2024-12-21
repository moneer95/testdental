import decreaseStock from "./decreaseStock";

async function divideItems(itemsMetadata) {
    // Process line items and their metadata
    for (const item of itemsMetadata.data) {
        const metadata = JSON.parse(item.price.product.metadata.additional_data);

        console.log("Metadata:", metadata);
        console.log("Doctype:", metadata.doctype);

        switch (metadata.doctype) {
            case "Products":
                await handleProductPurchase(metadata); // Await here
                break;
            case "Course":
                await handleCoursePurchase(metadata); // Await if asynchronous
                break;
            default:
                console.log("Unknown doctype:", metadata.doctype);
                break;
        }
    }
}

async function handleProductPurchase(metadata) {
    console.log("Handling product purchase for:", metadata);
    await decreaseStock(metadata); // Await here
}

async function handleCoursePurchase(metadata) {
    console.log("Handling course purchase for:", metadata);
    // Add your course-related logic here
}

module.exports = {
    divideItems,
};
