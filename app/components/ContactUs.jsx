import { ChevronsRight, MailOpen, MapPinned, PhoneCall } from "lucide-react";
import React from "react";
import ContactUsBanner from "./ContactUsBanner";
import ContactUsCards from "./ContactUsCards";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div>
       <ContactUsBanner/>
       <ContactUsCards/>
       <ContactUsForm/>
      {/* Contact US & Mail */}
      
      <div className="bg-[#113d47] w-full p-10">
        <form className="w-full max-w-lg mx-auto text-white">
          <input
            type="text"
            className="text -white bg-transparent w-full mx-auto  p-5 border-1 border-white rounded-4xl"
            placeholder="Your
            Name"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
