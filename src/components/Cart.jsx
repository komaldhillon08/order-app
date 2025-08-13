import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import { CartContext } from "./store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext)

    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totlePrice, item) => totlePrice + item.quantity * item.price, 0)

    function handleCloseCart() {
        userProgressCtx.hideCart();
        console.log("komal check function");

    }
    function handleGoToCheckout() {
        userProgressCtx.showCheckOut();
    }

    return (
        <>
            <Modal className="cart" open={userProgressCtx.progress === "cart"}>
                <h2>Your Cart</h2>
                <ul>
                    {cartCtx.items.map((item) => (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            onDecrement={() => cartCtx.removeItem(item.id)}
                            onIncrement={() => cartCtx.addItem(item)}
                        />
                    ))}

                </ul>
                <p className="cart-totle">{currencyFormatter.format(cartTotal)}</p>
                <p className="modal-actions">
                    <Button textOnly onClick={handleCloseCart} >Close</Button>
                    {cartCtx.items.length > 0 ? <Button onClick={handleGoToCheckout} >Go to Checkout</Button> : null}
                </p>
            </Modal>
        </>
    )
}