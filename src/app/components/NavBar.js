import { useSelector } from "react-redux";
const NavBar = () => {
    const amount = useSelector((store)=>store.cart.amount);
    return (
        <nav className="nav">
            <div>
                <h3>Your Cart Details</h3>

            </div>
            <div>
                <h4>Cart &nbsp;<span style={{color:'blue',fontSize:"1rem"}}>{amount}</span></h4>
                
            </div>
        </nav>
    )
}

export default NavBar;

