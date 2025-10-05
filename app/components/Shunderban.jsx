import React from "react";
import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import {
  BrickWallShield,
  PackageOpen,
  TruckElectric,
  TruckElectricIcon,
} from "lucide-react";
import Banner from "./Banner";
import BelowBanner from "./BelowBanner";
import DomesticService from "./DomesticService";
import InternationalService from "./InternationalService";
import WhyChoose from "./WhyChoose";
const Shunderban = () => {
  return (
    <div>
      <Banner />
      <BelowBanner />
      <DomesticService />
      <InternationalService />
      <WhyChoose />
    </div>
  );
};

export default Shunderban;
