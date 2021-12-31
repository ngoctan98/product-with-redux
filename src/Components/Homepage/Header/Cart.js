import { useSelector } from "react-redux";
import {  totalArgent } from "../../CreateSelector";

function Cart({ }) {
    const total= useSelector(totalArgent)
    const cart = useSelector(state => state.product.cart)
    
    return (
        <div className="cart">
            <p className="cartHeading">Sản phẩm mới thêm</p>
            <div >
                {cart.map((item, index) =>
                <div className="cartContainer" key={index}>
                     <img className="cartImage" src={item.img}></img>
                    <p className="cartHeadingProduct">{ item.title}</p>
                    <div>
                        <span className="cartPrice">{parseFloat(item.price_now).toLocaleString('de-DE')}đ</span>
                        <p className="cartQuanlity">số lượng : { item.quanlity}</p>
                    </div>
                </div>
                )}
            </div>
            <div className="cartFooter">
                <p className="cartFooterHeading">Tổng tiền {total}  </p>
                <button className="cartBtn">Xem giỏ hàng</button>
            </div>
        </div>
    )
    
}

export default Cart;