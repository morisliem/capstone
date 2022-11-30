import {
  CartItemCountStyle,
  CartIconContainerStyle,
} from "./cart-icon.styles.jsx";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartIcon = () => {
  const {isCartOpen, cartCount, setIsCartOpen} = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainerStyle onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <CartItemCountStyle>{cartCount}</CartItemCountStyle>
    </CartIconContainerStyle>
  );
};

export default CartIcon;
