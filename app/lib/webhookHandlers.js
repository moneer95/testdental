import decreaseStock from "./decreaseStock"

export async function divideItems(itemsMetadata) {

    itemsMetadata = JSON.parse(itemsMetadata.data)

    for (const item of itemsMetadata) {
        const metadata = item.price.product.metadata.additional_data;
        console.log(`Metadata:`, metadata);

        console.log(metadata.doctype);

        switch (metadata.doctype) {
            case "Products":
                await handleProductPurchase(metadata);
                break;
            case "Course":
                await handleCoursePurchase(metadata);
                break;
            default:
                break;
        }
    }
}

async function handleProductPurchase(metadata) {
    await decreaseStock(metadata);
}

async function handleCoursePurchase(metadata) {
    console.log("Handling course purchase:", metadata);
}
