import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import { CartContext } from "./store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button";

export default function Cart() {
    const cartCtx = useContext(CartContext)

    const cartTotal = cartCtx.quantity.reduce((totlePrice , item) => totlePrice + item.quantity * item.price , 0 )
    return (
        <>
            <Modal className="cart" open={true}>
                <h2>Your Cart</h2>
                <ul>
                    {cartCtx.items.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.quantity}
                        </li>
                    ))}
                </ul>
                <p className="cart-totle">{currencyFormatter.format(cartTotal)}</p>
                <p className="modal-actions">
                    <Button textOnly>Close</Button>
                    <Button >Go to Checkout</Button>
                </p>
            </Modal>
        </>
    )
}