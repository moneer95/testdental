import decreaseStock from "./decreaseStock"

export async function divideItems(itemsMetadata) {

    console.log(itemsMetadata.data)

    for (const item of itemsMetadata.data) {
        const metadata = JSON.parse(item.price.product.metadata.additional_data);
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

        console.log("end for")
    }
}

async function handleProductPurchase(metadata) {
    try{
        await decreaseStock(metadata, "variations");
    } catch (error) {
        console.error("Error in divideItems:", error.message);
    }
}

async function handleCoursePurchase(metadata) {
    try{
        await decreaseStock(metadata, "tickets");
    } catch (error) {
        console.error("Error in divideItems:", error.message);
    }}