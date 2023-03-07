import styled from "styled-components";

export const FtContainer = styled.div`
  width: 100%;
  height: 21vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }

`;
export const FtWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const FtLogoCon = styled.div`
  display: flex;
  background: rgba(189, 0, 255, 0.1);
  width: 170px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const FtLinkCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-transform: uppercase;
  
`;
export const FtLink = styled.a`
    font-weight: 600;
`;
export const FtBottomDiv = styled.div`
  width: 95%;
  height: 40px;
  background: #BD00FF;
  margin-top: 20px;
`;
