import './Style.css';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../../Action';
import {useNavigate} from 'react-router'


function Product({ item }) {
    const dispatch=useDispatch()

    let history=useNavigate()
    function handleClick(item) {
        
        const action = AddProduct(item)
        dispatch(action)

        history('/tab')
        
    }
    return (
                    <div onClick={() => handleClick(item)}  className='product'>
                        <img className='productImage' src={item.img}></img>
                        <h4 className='productHeading'>{item.title}</h4>
                        <div className='productPrice'>
                            <span className='productPriceOld'>{parseFloat(item.price_old).toLocaleString('de-DE')}đ</span>
                            <span className='productPriceNow'>{parseFloat(item.price_now).toLocaleString('de-DE')}đ</span>
                        </div>
                        <div className='productAction'>
                            <div className='productRating'>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <span class="productSale">{item.sale} đã bán</span>
                        </div>
                        <div className='productOrigin'>
                            <span className='productBrand'>{item.brand}</span>
                            <span className='productMade'>{item.made}</span>
                        </div>
                    </div>
       
    )
    
}

export default Product;