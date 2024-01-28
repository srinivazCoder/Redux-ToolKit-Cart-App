
import { removeItem,increaseAmount,decrieaseAmount } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ id,title,price,img,amount }) => {
    const dispatch = useDispatch()
    return (
        <div key={id}>
            <div className="cart-item">
                <img src={img} alt={id} />
                <div>
                    <h4>{title}</h4>
                    <div>Rs {price}</div>
                    <button className="remove-btn" onClick={()=>dispatch(removeItem(id))}> Remove</button>
                </div>
                <div>
                    {/* <input type="number" value={amount} style={{
                        width: "2rem",
                        "text-align": "center"
                    }} onChange={}></input> */}
                </div>
                <div>
                    <button className="btn" onClick={()=>{
                        
                        dispatch(increaseAmount(id))
                        }}>+</button>
                    <div className="btnD">{amount}</div>
                    <button className="btn" onClick={()=>{
                        if(amount===1){
                            dispatch(removeItem(id))
                            return
                        }
                        dispatch(decrieaseAmount(id))
                        }}>-</button>
                </div>

            </div>
        </div>
    )
}

export default CartItem;