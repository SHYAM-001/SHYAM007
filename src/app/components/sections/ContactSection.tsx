"use client";

import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";
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

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      alert("Message Sent Successfully!");
      form.current?.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Description>
          Feel free to reach out to me for any questions or opportunities!
        </Description>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email me 🚀</ContactTitle>
          <ContactInput type="email" placeholder="Your Email" name="sender_email" required />
          <ContactInput type="text" placeholder="Your Name" name="from_name" required />
          <ContactInput type="hidden" name="to_name" value="Tony Stock" />
          <ContactInput type="tel" placeholder="Phone Number" name="phone_no" required />
          <ContactInput type="text" placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" name="message" rows={4} required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(ContactSection), { ssr: false }); // Lazy loaded
