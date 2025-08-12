import { useContext } from "react"
import logo from "../assets/logo.jpg"
import Button from "./UI/Button.jsx"
import { CartContext } from "./store/CartContext.jsx"

export default function Header() {

  const cartCtx = useContext(CartContext)
  const totalCartItem = cartCtx.items.reduce((totalNumberOfItem, item) => { 
    return totalNumberOfItem + item.quantity ; 
  }, 0);
  return (
    <header id="main-header" >
      <div id="title" >
        <a href="#"><img src={logo} alt="logo" /></a>
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly >Cart ({totalCartItem})</Button>
      </nav>
    </header>

  )
}