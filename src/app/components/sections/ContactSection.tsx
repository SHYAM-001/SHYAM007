"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Container,
  Title,
  Wrapper,
  Description,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactButton,
  ContactInputMessage,
} from "@styles/sections/ContactSectionStyle";

const ContactSection = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Your-serviceid",
        "your_template_id",
        form.current,
        "tourapiid/token_id"
      )
      .then((result) => {
        alert("Message Sent");
        form.current.result();
      },
      (error) => {
        alert(error);
      });
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Description>
          Feel free to reach out to me for any questions or opportunities!
        </Description>
        <ContactForm onSubmit={handleSubmit}>
          <ContactTitle>Email me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default ContactSection;
