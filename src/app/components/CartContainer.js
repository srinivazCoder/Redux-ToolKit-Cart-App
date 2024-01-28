import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {openModal} from "../../features/modal/modelSlice"
const CartContainer = () => {
    const dispatch = useDispatch()
    const { cartItems,amount, total } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section className="App">
                <header>
                    <h2>your bag</h2>
                    <h4>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <section className="App">
            <header>
                <h2>YOUR BAG</h2>
               
            </header>
            <div>
                {cartItems.map((e) => {
                    return (

                        <CartItem key={e.id} {...e} />
                    )
                })}
            </div>
            <footer>
                <hr />
                <h4 className="total-cart">
                    Total <span>${total.toFixed(2)}</span>
                </h4>
                <a style={{textDecoration:'none'}} href="#modal" className="clear-btn" onClick={()=>dispatch(openModal())}>Clear Cart</a>
            </footer>

        </section>


    )
}

export default CartContainer;