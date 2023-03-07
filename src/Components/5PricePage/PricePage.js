import React from "react";
import Navbar from "../0Navbar/Navbar";
import Footer from "../1Footer/Footer";
import { PriceObjOne, PriceObjThree, PriceObjTwo } from "./PriceData";
import PriceDetailPage from "./PriceDetailPage";
import { PricePageCon, PriceSpace } from "./PriceDetailPageStyles";

const PricePage = () => {
  return (
    <>
    <Navbar />
    <PricePageCon>
      <PriceSpace />
      <PriceDetailPage {...PriceObjOne} />
      <PriceSpace />
      <PriceDetailPage {...PriceObjTwo} />
      <PriceSpace />
      <PriceDetailPage {...PriceObjThree} />
      <PriceSpace />
    </PricePageCon>
    <Footer/>
    </>

  );
};

export default PricePage;
