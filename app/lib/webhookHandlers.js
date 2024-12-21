
function divideItems(itemsMetadata) {
    // Process line items and their metadata
    itemsMetadata.data.forEach((item) => {
        const metadata = item.price.product.metadata;
        console.log(`Item: ${item.description}`);
        console.log(`Metadata:`, metadata);
    });

}


module.exports({
    divideItems
})