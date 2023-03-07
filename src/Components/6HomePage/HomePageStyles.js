import styled from "styled-components";
import { PriceCard } from "../4VideoPage/VideoPageStyles";

// Animation Section

export const HpContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const HpSpace = styled.div`
  height: 150px;
  @media screen and (max-width: 768px) {
    height: 70px;
  }
`;
// Section 1
export const Section1 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 750px;
  position: relative;

  // Apply bg on left container

  background: linear-gradient(to top, white, #fdf7ff);

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;
export const LeftDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* position: relative;
  background: rgba(189, 0, 255, 0.03);
  filter: blur(100px);
  z-index: 1; */
`;
export const LeftDivFilter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;

export const LTextCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  z-index: 3;

  ul {
    text-align: start;
    line-height: 20%;
    font-weight: 600;
    font-size: 1.5rem;
  }
  p {
    color: #bd00ff;
  }
`;
export const Lh2 = styled.h2`
  font-size: 2rem;
  text-align: center;

  span {
    color: #bd00ff;
  }
`;
export const RightDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 915px) {
    display: none;
  }
`;
export const RightDiv2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftDiv2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 915px) {
    display: none;
  }
`;
export const ImgCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 100px;
`;
export const StarImg = styled.img`
  width: 500px;
  position: absolute;
  top: -9%;
`;
export const GirlImg = styled.img`
  width: 500px;
`;
export const MidDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(189, 0, 255, 0.05);
  height: 650px;
`;
export const ImageCon = styled.div``;
export const CubImg = styled.img`
  width: 450px;
`;
export const TextCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  h1 {
    color: #bd00ff;
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 1.2rem;
  }
  button {
    padding: 10px;
    font-size: 1.4rem;
    background-color: #bd00ff;
    color: white;
    border: 2px solid white;
    border-radius: 15px;
    width: 150px;
  }
`;
export const BotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(189, 0, 255, 0.05);
  height: 500px; ;
`;
export const PhoneImg = styled.img`
  width: 450px;
`;

// Section 2

export const Section2 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopDiv2 = styled.div`
  flex: 1;
  width: 100%;
`;
export const RowCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 700px;
  @media screen and (max-width: 915px) {
    flex-direction: column;
  }
`;
export const HpCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 20%;
  @media screen and (max-width: 915px) {
    flex-direction: row;
    width: 80%;
  }
`;
export const HpRowTextCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  height: 50%;
`;
export const LapImg = styled.img`
  width: 100%;
  @media screen and (max-width: 915px) {
    width: 40%;
  }
`;
export const HpImgTitle = styled.h2`
  color: #bd00ff;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const HpCardText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: start;
  color: #bd00ff;
  @media screen and (max-width: 915px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;
export const CardLink = styled.a`
  text-decoration: underline;
  color: #bd00ff;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;
export const BotDiv2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bd00ff;
  background-color: #fdf7ff;
`;
export const HpLeftDiv = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  position: relative;
  bottom: 100px;
`;
export const ImgMan = styled.img`
  width: 400px;
  @media screen and (max-width: 915px) {
    width: 60%;
  }
`;
export const HpRightDiv = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const HpTextCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  h1 {
    position: relative;
    @media screen and (max-width: 915px) {
      font-size: 1.2rem;
    }
  }
  p {
    font-size: 1.4rem;
    @media screen and (max-width: 915px) {
      font-size: 1rem;
    }
  }
`;

// Section 3

export const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TopDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;
export const HpPriceCard = styled(PriceCard)`
  width: 25%;
  @media screen and (max-width: 915px) {
    width: 30%;
  }
`;

export const BotDiv3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const RectangleSpace = styled.div`
  width: 60px;
  height: 300px;
  background-color: #bd00ff;
  @media screen and (max-width: 768px) {
    width: 20px;
  }
`;
export const ReviewsCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
`;
export const RTextCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 90%;
  height: 100%;

  p {
    text-align: start;
    font-size: 1.2rem;
    font-weight: 400;
    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
  }
  h2 {
    @media screen and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const BotDiv4 = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 35vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
