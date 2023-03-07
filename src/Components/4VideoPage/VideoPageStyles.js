import styled from "styled-components";

export const VContainer = styled.div`
  height: 100%;
  width: 100%;
  @media screen and (max-width: 915px) {
    height: 100%;
  }
`;
export const VSection1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdf7ff;
  border-bottom: 1px solid #bd00ff;
`;
export const VTopDiv = styled.div`
  flex: 1;
`;
export const VSpace = styled.div`
  height: 70px;
`;
export const VimgDiv = styled.div`
  flex: 1;
`;
export const VImg = styled.img`
  max-width: 900px;
   @media screen and (max-width: 915px) {
    width: 100%;
  }
`;
export const VBotDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const VTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #bd00ff;
    margin-right: 15px;
  }

  @media screen and (max-width: 915px) {
    font-size: 1.1rem;
  }
`;
export const VText = styled.p`
  width: 75%;
  text-align: center;
  font-size: 1.3rem;
  @media screen and (max-width: 915px) {
    font-size: .9rem;
  }
`;
export const VSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Row1 = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  @media screen and (max-width: 915px) {
    font-size: .9rem;
    flex-direction: column;
  }
`;
export const VCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;
export const Img = styled.img`
  width: 300px;
`;
export const ImgTitle = styled.h3`
  color: #bd00ff;
`;
export const ImgText = styled.p`
  color: #bd00ff;
  font-weight: 600;
  font-size: 1.3rem;
`;
export const Row2 = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  @media screen and (max-width: 915px) {
    font-size: .9rem;
    flex-direction: column;
  }
`;
export const PriceSec = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #fdf7ff;
  border: 1px solid #bd00ff;

  @media screen and (max-width: 915px) {
    font-size: .9rem;
    flex-direction: column;
  }
`;
export const PriceLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 915px) {
    font-size: .9rem;
  }
`;
export const PriceTextCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
`;
export const PriceTitle = styled.h2`
  color: #bd00ff;
  text-align: center;
  
`;
export const PriceText = styled.p`
  align-items: flex-start;
  font-size: 1.2rem;
  width: 80%;
  @media screen and (max-width: 915px) {
    font-size: .9rem;
    text-align: center;
    width: 100%;
}
`;
export const PriceRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const PriceCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bd00ff;
  flex-direction: column;
  width: 60%;
  background-color: white;
  border-radius: 20px;
  height: 80%;


 
`;
export const CardTitle = styled.h2`
  color: #bd00ff;
  flex: 1;
  font-size: 21px;
  @media screen and (max-width: 915px) {
    font-size: 18px;
}
@media screen and (max-width: 768px) {
    font-size: 13px;
    width: 100%;
    text-align: center;
  }
`;
export const CardText = styled.p`
  width: 60%;
  position: relative;
  bottom: 3.5%;
  text-align: center;
  flex: 1;
  white-space: normal;
  line-height: 1.1;
  @media screen and (max-width: 915px) {
    font-size: 15px;
    line-height: auto;
    bottom: 10px;
    height: 58%;
    font-size: .8rem;
}
 @media screen and (max-width: 768px) {
    font-size: 11px;
    width: 100%;
  }

`;
export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;
export const CardBtn = styled.button`
  padding: 10px;
  font-size: 1.4rem;
  background-color: #bd00ff;
  color: white;
  border: 2px solid #bd00ff;
  border-radius: 10px;
  position: relative;
  align-self: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
