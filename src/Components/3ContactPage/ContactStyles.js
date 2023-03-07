import styled from "styled-components";

export const CtContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdf7ff;
  font-family: "Inter", sans-serif;
  border: 1px solid #bd00ff;
  overflow-x: none;
`;
export const CtTop = styled.div`
  flex: 1;
  display: flex;
`;
export const CtLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
   display: none;
  }
`;
export const ManImg = styled.img`
  max-width: 350px;
 
`;
export const CtRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
export const CtInfo = styled.div`
  text-align: start;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const CtTitle = styled.h1`
  color: #bd00ff;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const CtSpan = styled.p`
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const CtBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MediaIconCon = styled.div`
  display: flex;
  width: 50%;
  justify-content: start;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    position: relative;
    bottom: 15%;
    width: 90%;
  }

`;
export const MediaIcon = styled.div``;
export const Icon = styled.img`
  width: 120px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CtEmailContainer = styled.div`
  flex: 2;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  flex: 1;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const EmailCon = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  position: relative;
  bottom: 10%;
`;
export const CtInput = styled.input`
    padding: 15px;
    width: 70%;
    outline: none;

`;
export const CtBtn = styled.button`
    padding: 10px;
    border: none;
    background-color: #BD00FF;
    width: 20%;
    height: 47px;
    color: white;
    font-weight: 700;
    font-family: "inter";
    cursor: pointer;

    @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const EmailSpan = styled.div`
  flex: 1;
  width: 70%;
  font-size: 1.2rem;
  position: relative;
  bottom: 5%;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
`;
export const BottomSpace = styled.div`
  flex: 0.3;
`;
