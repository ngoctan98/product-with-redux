import Header from '../Homepage/Header';
import './Style.css';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddCart } from '../Action';

function TabPage() {
    const dispatch = useDispatch()
    const Product = useSelector(state => state.product.product[0])

    const [count, setCount] = useState(0)
    
    function handleClick(e) {
        console.log(e.target.outerText)
        if (e.target.outerText=='-') {
            if (count == 0) setCount(0)
            else setCount(count-1)
        }
        else setCount(count + 1)
    }

    function handleAddCart(data,quanlity) {
         
        const action = AddCart(data, quanlity)
        dispatch(action)
        setCount(0)
       
    }
    
    return (
        <div>
            <Header/>
            <div className="tabProduct">

                <img className="tabProductImg" src={Product.img}></img>
                <div className="tabProductInfor">
                    <div className="tabProductHeader">
                        <span className="tabProductBrand">Thương hiệu : {Product.brand}</span>
                        <h1 className="tabProductHeading">{ Product.title}</h1>
                    </div>
                    <h1 className="tabProductPrice">{parseFloat(Product.price_now).toLocaleString('de-DE')}đ</h1>
                    <div className="tabProductQuanlity">
                        <p className="quanlityHeading">Số lượng</p>
                        <div className="count">
                            <span onClick={(e) => handleClick(e)} className="countDown">-</span>
                            <p className="quanlity">{count}</p>
                            <span onClick={(e) => handleClick(e)} className="countUp">+</span>
                        </div>
                    </div>
                    <button onClick={() =>handleAddCart(Product,count)} className="addCart" >Thêm vào giỏ hàng</button>
                    
                </div>

            </div>
        </div>

    )
    
}

export default TabPage;