
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/modal/modelSlice";

const Modal = () => {

    const dispatch = useDispatch();

    return (
        <aside className="modal"  id="modal">
            <div>
                <h4 >Remove all items from your shopping cart?</h4>
            </div>
            <div>
                <button className="btn" onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal());
                }

                }>OK</button>
                <button className="btn" 
                    onClick={()=>{dispatch(closeModal())}}
                >X</button>
            </div>
        </aside>
    )
}

export default Modal;