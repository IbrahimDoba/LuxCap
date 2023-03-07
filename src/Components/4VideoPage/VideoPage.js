import React from "react";
import Ytlogo from "../Images/Ytlogo.png";
import salad1 from "../Images/Salad1.png";
import salad2 from "../Images/Salad2.png";
import salad3 from "../Images/Salad3.png";
import cake from "../Images/cake.png";

import {
  BtnDiv,
  CardBtn,
  CardText,
  CardTitle,
  Img,
  ImgText,
  ImgTitle,
  PriceCard,
  PriceLeft,
  PriceRight,
  PriceSec,
  PriceText,
  PriceTextCon,
  PriceTitle,
  Row1,
  Row2,
  VBotDiv,
  VCard,
  VContainer,
  VImg,
  VimgDiv,
  VSection,
  VSection1,
  VSpace,
  VText,
  VTitle,
  VTopDiv,
} from "./VideoPageStyles";
import Navbar from "../0Navbar/Navbar";
import Footer from "../1Footer/Footer";

const VideoPage = () => {
  return (
    <>
    <Navbar/>
    <VContainer>
      <VSection1>
        <VTopDiv>
          <VSpace />
          <VimgDiv>
            <VImg src={Ytlogo} />
          </VimgDiv>
        </VTopDiv>
        <VBotDiv>
          <VTitle>
            {" "}
            <p> LESSON #2 : </p> How To Blalablu Lalala
          </VTitle>
          <VText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            luctus mi elit, sed hendrerit ligula vehicula sit amet. Quisque
            bibendum laoreet elit, et gravida massa finibus eget. Praesent in
            placerat diam, quis pulvinar ex. Aliquam at sollicitudin ipsum, non
            venenatis arcu. Ut egestas eu diam eu aliquam. Quisque et aliquet
            nisl. Donec nec nulla tincidunt, pretium mauris eu, posuere odio.
            Curabitur convallis vulputate odio commodo fringilla.
          </VText>
        </VBotDiv>
      </VSection1>
      <VSection>
        <VSpace />
        <Row1>
          <VCard>
            <Img src={salad1} />
            <ImgTitle>Lesson #1</ImgTitle>
            <ImgText>The power of Townhall...</ImgText>
          </VCard>
          <VCard>
            <Img src={cake} />
            <ImgTitle>Lesson #2</ImgTitle>
            <ImgText>The power of Townhall...</ImgText>
          </VCard>
        </Row1>
        <Row2>
          <VCard>
            <Img src={salad2} />
            <ImgTitle>Lesson #3</ImgTitle>
            <ImgText>The power of Townhall...</ImgText>
          </VCard>
          <VCard>
            <Img src={salad3} />
            <ImgTitle>Lesson #4</ImgTitle>
            <ImgText>The power of Townhall...</ImgText>
          </VCard>
        </Row2>
        <VSpace />
        <PriceSec>
          <PriceLeft>
            <PriceTextCon>
              <PriceTitle>UPGRADE!</PriceTitle>
              <PriceText>
                Lorem ipsum dolor sit amet,
                <br /> consectetu r adipiscing elit. Suspendisse luctus mi elit,{" "}
                <br />
                sed hendrerit ligula vehicula sit amet. Quisque bibendum laoreet
                elit, et gravida massa finibus eget. Praesent in placerat diam,{" "}
                <br /> quis pulvinar ex. Aliquam at sollicitudin ipsum, non
                venenatis arcu.
              </PriceText>
            </PriceTextCon>
          </PriceLeft>
          <PriceRight>
            <PriceCard>
              <CardTitle>PROFESSIONALS</CardTitle>
              <CardText>
                Ut egestas eu diam eu aliquam. Quisque et aliquet nisl. Donec
                nec nulla tincidunt, pretium mauris eu, posuere odio. Curabitur
                convallis vulputate odio commodo fringilla.
              </CardText>
              <BtnDiv>
                <CardBtn>#1,400,000</CardBtn>
              </BtnDiv>
            </PriceCard>
          </PriceRight>
        </PriceSec>
        <VSpace />
      </VSection>
    </VContainer>
    <Footer/>
    </>

  );
};

export default VideoPage;
