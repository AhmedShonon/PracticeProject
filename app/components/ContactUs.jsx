import { ChevronsRight, MailOpen, MapPinned, PhoneCall } from "lucide-react";
import React from "react";
import ContactUsBanner from "./ContactUsBanner";
import ContactUsCards from "./ContactUsCards";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div>
      <ContactUsBanner />
      <ContactUsCards />
      <ContactUsForm />
      {/* Contact US & Mail */}

      <div className="bg-[#113d47] w-full p-10">
        <i className="text-white">Contact Us</i>
        <p className="text-white text-5xl mb-15">Send Message Anytime</p>
        <form className="w-full max-w-lg mx-auto text-white">
          <div className=" flex flex-col md:flex-row gap-4">
            <div>
              <input
                type="text"
                className="text-white bg-transparent w-full mx-auto  p-5 border-1 border-[#345a63] rounded-4xl placeholder:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="text-white bg-transparent w-full mx-auto  p-5 border-1 border-[#345a63] rounded-4xl placeholder:text-white"
                placeholder="Your Email"
              />
            </div>
          </div>
          <input
            type="text"
            className="text-white bg-transparent w-full mx-auto  px-5  pt-5 pb-21 border-1 border-[#345a63] mt-7  rounded-4xl placeholder:text-white"
            placeholder="Your Message"
          />
          <div className=" flex flex-col bg-transparent">
            <button className="relative overflow-hidden border border-[#1ca8cb] p-5 bg-transparent font-bold w-50 rounded-full mt-5 text-[#1ca8cb] hover:text-white transition-colors duration-700 group">
              <span className="absolute inset-0 bg-[#1ca8cb] transform -translate-x-full transition-transform duration-700 group-hover:translate-x-0"></span>
              <span className="relative z-10 text-white ">Submit Message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
