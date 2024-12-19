
export const getCartPayload = (): Array<object> => {

    // Get stored cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Prepare payload for the API
    const payload = storedCart
        .map((item: any) => {
            if (item.item === "course") {
                return {
                    name: item.course_name,
                    ticketId: item.selectedTicket?.name || "none",
                    quantity: item.quantity,
                };
            } else if (item.item === "product") {
                return {
                    name: item.product_name,
                    variationId: item.variationId,
                    quantity: item.quantity,
                };
            }
            return null;
        })
        .filter(Boolean);

    return payload;
};
