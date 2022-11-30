import {
  CartItemsStyle,
  CartDropdownContainerStyle,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainerStyle>
      <CartItemsStyle>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsStyle>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </CartDropdownContainerStyle>
  );
};

export default CartDropdown;
