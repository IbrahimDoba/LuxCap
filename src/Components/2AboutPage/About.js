import React from "react";
import Navbar from "../0Navbar/Navbar";
import Footer from "../1Footer/Footer";
import { VSpace } from "../4VideoPage/VideoPageStyles";
import Star from "../Images/Star1.png";
import {
  AbBgImg,
  AbBottomDiv,
  AbContainer,
  AbContentWrap,
  AbStarCon,
  AbText,
  AbTitle,
  AbTopDiv,
  AbTopSpace,
  BotSpan,
  TopSpan,
} from "./AboutStyles";

const About = () => {
  return (
    <>
      <Navbar />

      <AbContainer>
        <AbTopDiv>
          <AbTopSpace />

          <AbContentWrap>
            <AbTitle>About Us</AbTitle>
            <AbText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus mi elit, sed hendrerit ligula vehicula sit
              amet. Quisque bibendum laoreet elit, et gravida massa finibus
              eget. Praesent in placerat diam, quis pulvinar ex. Aliquam at
              sollicitudin ipsum, non venenatis arcu. Ut egestas eu diam eu
              aliquam. Quisque et aliquet nisl. Donec nec nulla tincidunt,
              pretium mauris eu, posuere odio. Curabitur convallis vulputate
              odio commodo fringilla.
            </AbText>
          </AbContentWrap>
        </AbTopDiv>
        <VSpace />
        <AbBottomDiv>
          <AbStarCon>
            <TopSpan>130+</TopSpan>
            <AbBgImg src={Star} />
            <BotSpan>Projects</BotSpan>
          </AbStarCon>
          <AbStarCon>
            <TopSpan>400+</TopSpan>
            <AbBgImg src={Star} />
            <BotSpan>Clients</BotSpan>
          </AbStarCon>
          <AbStarCon>
            <TopSpan>20+</TopSpan>
            <AbBgImg src={Star} />
            <BotSpan>Awards</BotSpan>
          </AbStarCon>
        </AbBottomDiv>
      </AbContainer>
      <VSpace />
      <Footer />
    </>
  );
};

export default About;
