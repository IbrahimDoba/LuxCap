import React from "react";
import {
    BottomSpace,
  CtBottom,
  CtBtn,
  CtContainer,
  CtEmailContainer,
  CtInfo,
  CtInput,
  CtLeft,
  CtRight,
  CtSpan,
  CtTitle,
  CtTop,
  EmailCon,
  EmailSpan,
  Icon,
  ManImg,
  MediaIcon,
  MediaIconCon,
  Title,
} from "./ContactStyles";
import ManPhoto from "../Images/ManPhoto.png"
import GPlay from "../Images/googleplay.png"
import AStore from "../Images/applestore.png"
import AGallery from "../Images/AppleGallery.png"
import Wstore from "../Images/WindowsStore.png"
import Navbar from "../0Navbar/Navbar";
import Footer from "../1Footer/Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <CtContainer>
      <CtTop>
        <CtLeft>
          <ManImg src={ManPhoto} />
        </CtLeft>
        <CtRight>
          <CtInfo>
            <CtTitle>CONTACT US</CtTitle>
            <CtSpan>
              Feel free to reach out to us through any of the following medium
            </CtSpan>
            <CtSpan>Phone: +234 989 0909 90</CtSpan>
            <CtSpan>Email: bulablueservice@gmail.com</CtSpan>
          </CtInfo>
        </CtRight>
      </CtTop>
      <CtBottom>
        <MediaIconCon>
            <MediaIcon>
                <Icon src={GPlay} />
            </MediaIcon>
            <MediaIcon>
                <Icon src={AStore}/>
            </MediaIcon>
            <MediaIcon>
                <Icon src={AGallery}/>
            </MediaIcon>
            <MediaIcon>
                <Icon src={Wstore}/>
            </MediaIcon>
        </MediaIconCon>
        <CtEmailContainer>
          <Title>GET NOTIFIED!</Title>
          <EmailCon>
          <CtInput placeholder="Enter Your Email Address"/>
          <CtBtn>SUBMIT</CtBtn>
          </EmailCon>
          <EmailSpan>
            Etiam interdum augue commodo aliquam tempus. Donec gravida, enim sit
            amet interdum sagittis,
          </EmailSpan>
        </CtEmailContainer>
        <BottomSpace/>
      </CtBottom>
    </CtContainer>
    <Footer/>
    </>

  );
};

export default Contact;
