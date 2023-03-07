import React from "react";
import star from "../HomePageImages/stars.png";
import girl from "../HomePageImages/girlimg.png";
import phone from "../HomePageImages/phoneimg.png";
import cube from "../HomePageImages/cubeimg.png";
import laptop from "../HomePageImages/laptopimg.png";
import Manimg from "../HomePageImages/manImg.png";
import {
  BotDiv,
  BotDiv2,
  CardLink,
  CubImg,
  GirlImg,
  HpCard,
  HpCardText,
  HpContainer,
  HpImgTitle,
  HpLeftDiv,
  HpRightDiv,
  ImageCon,
  ImgCon,
  ImgDiv,
  ImgMan,
  LapImg,
  LeftDiv,
  Lh2,
  LTextCon,
  MidDiv,
  PhoneImg,
  RightDiv,
  RowCon,
  Section1,
  Section2,
  StarImg,
  TextCon,
  TopDiv,
  TopDiv2,
  HpSpace,
  Section3,
  TopDiv3,
  BotDiv3,
  ReviewsCon,
  RTextCon,
  HpPriceCard,
  RectangleSpace,
  BotDiv4,
  LeftDivFilter,
  RightDiv2,
  LeftDiv2,
  HpTextCon,
  HpRowTextCon,
} from "./HomePageStyles";
import {
  BtnDiv,
  CardBtn,
  CardText,
  CardTitle,
} from "../4VideoPage/VideoPageStyles";
import {
  CtBtn,
  CtEmailContainer,
  CtInput,
  EmailCon,
  EmailSpan,
  Title,
} from "../3ContactPage/ContactStyles";
import Footer from "../1Footer/Footer";
import Navbar from "../0Navbar/Navbar";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const HomePageDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <HpContainer>
        <Section1>
          <TopDiv>
            <LeftDivFilter>
              <LTextCon data-aos="fade-right">
                <Lh2>
                  The <span>Fastest</span> Way to <span>Learn</span>
                </Lh2>
                <ul>
                  <li>3 weeks program</li>
                  <li>
                    <p>1 life time coach </p>
                  </li>
                  <li>24/7 customer care</li>
                </ul>
              </LTextCon>
            </LeftDivFilter>
            <RightDiv data-aos="fade-left">
              <ImgCon>
                <StarImg src={star} />
                <GirlImg src={girl} />
              </ImgCon>
            </RightDiv>
          </TopDiv>
          <MidDiv>
            <LeftDiv2>
              <ImageCon data-aos="fade-right">
                <CubImg src={cube} />
              </ImageCon>
            </LeftDiv2>
            <RightDiv2 data-aos="fade-left">
              <TextCon>
                <h1>Product Design</h1>
                <p>
                  Mauris luctus dignissim ipsum, et aliquam tortor consequat
                  pellentesque . Nulla ac augue facilisis, sagittis leo ac,
                  fringilla lectus. Etiam interdum augue commodo aliquam tempus.
                  Donec gravida , enim sit amet interdum sagittis, libero eros
                  congue quam, sit amet ultricies sapie n arcu a tellus.
                  Praesent porta ultrices puru s in auctor.
                </p>
                <button>Enroll</button>
              </TextCon>
            </RightDiv2>
          </MidDiv>
          <BotDiv>
            <LeftDiv data-aos="fade-right">
              <TextCon>
                <h1>Web3.0</h1>
                <p>
                  Mauris luctus dignissim ipsum, et aliquam tortor consequat
                  pellentesque . Nulla ac augue facilisis, sagittis leo ac,
                  fringilla lectus. Etiam interdum augue commodo aliquam tempus.
                  Donec gravida , enim sit amet interdum sagittis, libero eros
                  congue quam, sit amet ultricies sapie n arcu a tellus.
                  Praesent porta ultrices puru s in auctor.
                </p>
                <button>Enroll</button>
              </TextCon>
            </LeftDiv>
            <RightDiv data-aos="fade-left">
              <ImageCon>
                <PhoneImg src={phone} />
              </ImageCon>
            </RightDiv>
          </BotDiv>
        </Section1>
        <HpSpace />
        <Section2>
          <TopDiv2>
            <RowCon>
              <HpCard>
                <LapImg src={laptop} />
                <HpRowTextCon>
                  <HpImgTitle>Video 1</HpImgTitle>
                  <HpCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam auctor erat id diam semper sodales. Etiam lacinia dui
                    in justo tristique consequat. Pellentesque quis nisl nibh.
                  </HpCardText>
                  <CardLink>VIEW LIVE</CardLink>
                </HpRowTextCon>
              </HpCard>
              <HpCard>
                <LapImg src={laptop} />
                <HpRowTextCon>
                  <HpImgTitle>Video 2</HpImgTitle>
                  <HpCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam auctor erat id diam semper sodales. Etiam lacinia dui
                    in justo tristique consequat. Pellentesque quis nisl nibh.
                  </HpCardText>
                  <CardLink>VIEW LIVE</CardLink>
                </HpRowTextCon>
              </HpCard>
              <HpCard>
                <LapImg src={laptop} />
                <HpRowTextCon>
                  <HpImgTitle>Video 3</HpImgTitle>
                  <HpCardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam auctor erat id diam semper sodales. Etiam lacinia dui
                    in justo tristique consequat. Pellentesque quis nisl nibh.
                  </HpCardText>
                  <CardLink>VIEW LIVE</CardLink>
                </HpRowTextCon>
              </HpCard>
            </RowCon>
          </TopDiv2>
          <HpSpace />
          <BotDiv2>
            <HpLeftDiv data-aos="fade-right">
              <ImgDiv>
                <ImgMan src={Manimg} />
              </ImgDiv>
            </HpLeftDiv>
            <HpRightDiv data-aos="fade-left">
              <HpTextCon>
                <h1>4 MONTHS 12 LESSONS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetu r adipiscing elit.{" "}
                  <br />
                  Suspendisse luctus mi elit,
                  <br /> sed hendrerit ligula vehicula sit amet. Quisque
                  bibendum laoreet elit, et gravida massa finibus eget. Praesent
                  in placerat diam, quis pulvinar ex. Aliquam at sollicitudin
                  ipsum, non venenatis arcu.
                </p>
              </HpTextCon>
            </HpRightDiv>
          </BotDiv2>
        </Section2>
        <HpSpace />
        <Section3>
          <TopDiv3>
            <HpPriceCard>
              <CardTitle>BEGINNER</CardTitle>
              <CardText>
                Ut egestas eu diam eu aliquam. Quisque et aliquet nisl. Donec
                nec nulla tincidunt, pretium mauris eu, posuere odio. Curabitur
                convallis vulputate odio commodo fringilla.
              </CardText>
              <BtnDiv>
                <CardBtn>#400,000</CardBtn>
              </BtnDiv>
            </HpPriceCard>
            <HpPriceCard>
              <CardTitle>INTERMEDIARY</CardTitle>
              <CardText>
                Ut egestas eu diam eu aliquam. Quisque et aliquet nisl. Donec
                nec nulla tincidunt, pretium mauris eu, posuere odio. Curabitur
                convallis vulputate odio commodo fringilla.
              </CardText>
              <BtnDiv>
                <CardBtn>#900,000</CardBtn>
              </BtnDiv>
            </HpPriceCard>
            <HpPriceCard>
              <CardTitle>MASTERCLASS</CardTitle>
              <CardText>
                Ut egestas eu diam eu aliquam. Quisque et aliquet nisl. Donec
                nec nulla tincidunt, pretium mauris eu, posuere odio. Curabitur
                convallis vulputate odio commodo fringilla.
              </CardText>
              <BtnDiv>
                <CardBtn>#1,400,000</CardBtn>
              </BtnDiv>
            </HpPriceCard>
          </TopDiv3>
          <HpSpace />
          <BotDiv3>
            <RectangleSpace />
            <ReviewsCon>
              <RTextCon>
                <p>
                  unc vulputate nunc nunc, id varius turpis scelerisque
                  ultricies. Proin a aliquam tellus. Quisque tellus elit,
                  tristique a quam vitae, tempor varius ante
                </p>
                <h2>DONALD JNR O</h2>
              </RTextCon>
            </ReviewsCon>
            <RectangleSpace />

            <ReviewsCon>
              <RTextCon>
                <p>
                  unc vulputate nunc nunc, id varius turpis scelerisque
                  ultricies. Proin a aliquam tellus. Quisque tellus elit,
                  tristique a quam vitae, tempor varius ante
                </p>
                <h2>DONALD JNR O</h2>
              </RTextCon>
            </ReviewsCon>
            <RectangleSpace />
          </BotDiv3>
          <HpSpace />
          <BotDiv4>
            <CtEmailContainer>
              <Title>GET NOTIFIED!</Title>
              <EmailCon>
                <CtInput placeholder="Enter Your Email Address" />
                <CtBtn>SUBMIT</CtBtn>
              </EmailCon>
              <EmailSpan>
                Etiam interdum augue commodo aliquam tempus. Donec gravida, enim
                sit amet interdum sagittis,
              </EmailSpan>
            </CtEmailContainer>
          </BotDiv4>
        </Section3>
        <HpSpace />
      </HpContainer>
      <Footer />
    </>
  );
};

export default HomePageDetails;
