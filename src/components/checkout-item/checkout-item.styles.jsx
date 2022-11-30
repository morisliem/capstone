import styled from "styled-components";

export const CheckoutItemContainerStyle = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainerStyle = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RemoveButtonStyle = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const QuantityStyle = styled.span`
  width: 23%;
  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const NameStyle = styled.span`
  width: 23%;
`;

export const PriceStyle = styled.span`
  width: 23%;
`;

export const ValueStyle = styled.span`
  margin: 0 10px;
`;

export const ArrowStyle = styled.div`
  cursor: pointer;
`;
