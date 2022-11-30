import {
  CartItemNameStyle,
  CartItemDetailStyle,
  CartItemContainerStyle,
  CartItemPriceStyle,
} from "./cart-item.styles.jsx";

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CartItemContainerStyle>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetailStyle>
        <CartItemNameStyle>{name}</CartItemNameStyle>
        <CartItemPriceStyle>
          {quantity} * ${price}
        </CartItemPriceStyle>
      </CartItemDetailStyle>
    </CartItemContainerStyle>
  );
};

export default CartItem;
