import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import MailBanner from "./MailBanner";
import { MailCheck, MapPin, MessagesSquare } from "lucide-react";
import HeadLive from "./HeadLive";
import CustomerForm from "./CustomerForm";

const ShundarbanForm = () => {
  return (
    <div>
      <MailBanner />
      <HeadLive />
      <CustomerForm />
    </div>
  );
};

export default ShundarbanForm;
