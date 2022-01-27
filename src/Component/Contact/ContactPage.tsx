import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/header";
import { HeaderUserProps } from "../PropsConfig/HeaderUserProps";
import ContactForm from "./ContactForm/ContactForm";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {};
  }, []);
  return (
    <div>
      <Header {...HeaderUserProps} />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ContactPage;
