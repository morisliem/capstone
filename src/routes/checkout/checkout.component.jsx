import {
  CheckoutBlockStyle,
  CheckoutTotalStyle,
  CheckoutHeaderStyle,
  CheckoutContainerStyle,
} from "./checkout.styles.jsx";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const {cartItems, cartTotalPrice} = useContext(CartContext);
  return (
    <CheckoutContainerStyle>
      <CheckoutHeaderStyle>
        <CheckoutBlockStyle>
          <span>Product</span>
        </CheckoutBlockStyle>
        <CheckoutBlockStyle>
          <span>Description</span>
        </CheckoutBlockStyle>
        <CheckoutBlockStyle>
          <span>Quantity</span>
        </CheckoutBlockStyle>
        <CheckoutBlockStyle>
          <span>Price</span>
        </CheckoutBlockStyle>
        <CheckoutBlockStyle>
          <span>Remove</span>
        </CheckoutBlockStyle>
      </CheckoutHeaderStyle>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <CheckoutTotalStyle>Total: ${cartTotalPrice}</CheckoutTotalStyle>
    </CheckoutContainerStyle>
  );
};

export default Checkout;
