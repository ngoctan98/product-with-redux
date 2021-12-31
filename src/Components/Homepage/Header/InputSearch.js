import { PRODUCTS } from "../../../Contanst";
import Cart from "./Cart";
import './Style.css';



function InputSearch() {
   
    return (
        <div className="inputSearch">
            <div className="logo">
                <a href="https://shopee.vn/HL-LOCK-LOCK-Brand-Opening-col.46305?page=0"> <img style={{width:"100%"}} src="https://storage.googleapis.com/ops-shopee-files-live/live/affiliate-blog/2019/05/logo-full-white.png"/> </a>
            </div>
            <div className="headerSearch">
                <div className="searchProduct">
                    <input className="input"></input>
                    <i className="far fa-search"></i>
                </div>
                <div className="productList">
                    {PRODUCTS.map((item, index) => <p className="productItem" key={index}>{ item}</p>)}
                </div>
            </div>
            <div className="cartProduct">
                <i class="fal fa-shopping-cart"></i>
                <div>
                    <Cart  /> 
                </div>
            </div>
        </div>
    )
}

export default InputSearch;