export const AddProduct = (data) => {
    return {
        type: 'ADD',
        payload: data
    }
}

export const AddCart = (data, quanlity) => {
    return {
        type: 'ADD_CART',
        payload: {
            ...data,
            quanlity: quanlity
        }
    }
        
}