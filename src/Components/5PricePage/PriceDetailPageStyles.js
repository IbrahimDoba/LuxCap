import styled from "styled-components";
import { PriceCard, PriceSec, VSpace } from "../4VideoPage/VideoPageStyles";

export const PricePageCon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const PriceSpace = styled(VSpace)`
  height: 200px;
  @media screen and (max-width: 768px) {
   height: 100px;
  }
`;

export const PriceCon = styled(PriceSec)`
  flex-direction: ${({ cardStartCol }) =>
    cardStartCol ? "row" : "row-reverse"};
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
    flex-direction: column;
  }
`;
export const PriceCardCon = styled(PriceCard)`
  position: relative;
  bottom: 20%;
`;
