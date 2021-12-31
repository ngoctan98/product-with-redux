let Pro=[]
fetch('http://localhost:3000/productList')
    .then(res => res.json())
    .then(product => {
        
        Pro.splice(0,0,product);
        console.log(Pro);}
    )
const initialvalue = {
        ProductList: Pro,
        product: [],
        cart: []
}
console.log(initialvalue)
            
const ProductReducers = (state = initialvalue, action) => {
        switch (action.type) {
            case 'ADD': {
                
                const newProduct = state.product
                newProduct.splice(0,1,action.payload)
                return {
                    ...state,
                    product: newProduct  }
            }
            case 'ADD_CART': {
                const newCart = state.cart
                const find = newCart.some(item => {
                   
                  return item.id == action.payload.id
                })
                console.log(find)

                if (!find) {
                    newCart.push(action.payload)
                    return {
                        ...state,
                        cart: newCart
                    }
                }
                else {
                    const filterCart = newCart.filter(item => item.id !== action.payload.id)
                    const findCart = newCart.find(item => item.id == action.payload.id)
                    const newQuanlity = findCart.quanlity + action.payload.quanlity
                    const cartFind = {...findCart, quanlity:newQuanlity}
                    
                    filterCart.push(cartFind)
                    return {
                        ...state,
                        cart: filterCart
                    }
                }

                }
                
                
               
                
            
        default: return state
            
    }
    
}
export default ProductReducers;


   






