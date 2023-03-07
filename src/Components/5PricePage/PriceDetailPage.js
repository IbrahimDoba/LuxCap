import React from "react";
import { BtnDiv, CardBtn, CardText, CardTitle,  PriceLeft, PriceRight, PriceText, PriceTextCon, PriceTitle } from "../4VideoPage/VideoPageStyles";
import { PriceCardCon, PriceCon  } from "./PriceDetailPageStyles";

const PriceDetailPage = ({id,cardStartCol,cardTitle,cardText,cardBtnText,textTitle,textBody}) => {
  return (
      <PriceCon cardStartCol={cardStartCol} id={id}>
        <PriceLeft>
          <PriceTextCon>
            <PriceTitle style={{color: "black"}}>{textTitle}</PriceTitle>
            <PriceText >
              {textBody}
            </PriceText>
          </PriceTextCon>
        </PriceLeft>
        <PriceRight>
          <PriceCardCon>
            <CardTitle>{cardTitle}</CardTitle>
            <CardText>
             {cardText}
            </CardText>
            <BtnDiv>
              <CardBtn>{cardBtnText}</CardBtn>
            </BtnDiv>
          </PriceCardCon>
        </PriceRight>
      </PriceCon>
  );
};

export default PriceDetailPage;
