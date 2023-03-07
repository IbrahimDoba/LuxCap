import styled from "styled-components";

export const AbContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const AbTopDiv = styled.div`
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const AbTopSpace = styled.div`
  flex: 1;
`;
export const AbContentWrap = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border: 2px solid black; */
  position: relative;
`;
export const AbTitle = styled.h1`
  color: #bd00ff;
`;
export const AbText = styled.p`
  max-width: 80%;
  white-space: normal;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;
export const AbBottomDiv = styled.div`
  flex: 1;
  width: 100%;
  background-color: #fffafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const AbStarCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const TopSpan = styled.h2`
  position: absolute;
  top: 25%;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 21px;
  }
  @media screen and (max-width: 530px) {
    font-size: 18px;
    top: 20%;
  }
`;
export const AbBgImg = styled.img`
  width: 90%;
`;
export const BotSpan = styled.p`
  font-weight: 700;
  font-size: 24px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
