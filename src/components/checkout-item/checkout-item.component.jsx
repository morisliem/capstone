import {
  NameStyle,
  QuantityStyle,
  RemoveButtonStyle,
  ImageContainerStyle,
  CheckoutItemContainerStyle,
  PriceStyle,
  ValueStyle,
  ArrowStyle,
} from "./checkout-item.styles.jsx";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
  const {clearItemFromCart, addItemToCart, removeItemFromCart} =
    useContext(CartContext);
  const {name, imageUrl, price, quantity} = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainerStyle>
      <ImageContainerStyle>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainerStyle>
      <NameStyle>{name}</NameStyle>
      <QuantityStyle>
        <ArrowStyle onClick={removeItemHandler}>&#10094;</ArrowStyle>
        <ValueStyle>{quantity}</ValueStyle>
        <ArrowStyle onClick={addItemHandler}>&#10095;</ArrowStyle>
      </QuantityStyle>
      <PriceStyle>{price}</PriceStyle>
      <RemoveButtonStyle onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonStyle>
    </CheckoutItemContainerStyle>
  );
};

export default CheckoutItem;
