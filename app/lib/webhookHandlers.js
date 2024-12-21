import decreaseStock from "./decreaseStock";

function divideItems(itemsMetadata) {
    // Process line items and their metadata
    itemsMetadata.data.forEach((item) => {
        const metadata = item.price.product.metadata.additional_data;
        // console.log(`Item: ${item.description}`);
        console.log(`Metadata:`, metadata);

        switch(metadata.doctype){
            case "Products":
                handleProductPurchase(metadata)
                break;
            case "Course":
                handleCoursePurchase(metadata)
        }
    });
}

function handleProductPurchase(metadata){
    decreaseStock(metadata)
}

function handleCoursePurchase(metadata){

}


module.exports = {
    divideItems
}