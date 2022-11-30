import styled from "styled-components";

export const CartItemContainerStyle = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const CartItemDetailStyle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItemNameStyle = styled.span`
  font-size: 16px;
`;

export const CartItemPriceStyle = styled.span`
  font-size: 16px;
`;