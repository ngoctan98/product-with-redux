import { useSelector } from "react-redux";
import Product from "./Product";

function Container() {
    
    const product = useSelector(state => state.product.ProductList[0])
        
    

    return (
        <div className="container">
            {
                product.map((item, index) =>
                    <Product  item={item} key={index} />
                )
            }
            
        </div>
    )
}

export default Container;