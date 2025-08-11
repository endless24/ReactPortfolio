import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocateOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function useContactMeData() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_q1bmfdg", "template_ri7th6e", form.current, {
        publicKey: "BJAp8ybcxAtDmyxtv",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setError(false);
          form.current.reset();
          setSuccess("Message sent successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess(false);
          form.current.reset();
          setError(
            "Failed to send message, please try again later....",
            error.text
          );
        }
      );
  };

  const title = "Contact Me";

  const leftContentData = {
    title: "Get in Touch",
    description:
      "Feel free to reach out for collaborations  you \n are just a few clicks away!",
  };

  const rightContentData = {
    image: "../../public/images/email-image.png",
  };

  const infoData = [
    {
      Icon: IoLocateOutline,
      text: "Lagos, Nigeria",
    },
    {
      Icon: FiPhone,
      text: "+2348067134630",
    },
    {
      Icon: HiOutlineMail,
      text: "josephchinonye2@gmail.com",
    },
  ];

  const socialData = [
    {
      name: "LinkedIn",
      url: "#",
      Icon: FaLinkedin,
    },
    {
      name: "GitHub",
      url: "#",
      Icon: FaGithub,
    },
    {
      name: "Twitter",
      url: "#",
      Icon: FaXTwitter,
    },
    {
      name: "Instagram",
      url: "#",
      Icon: FaInstagram,
    },
  ];
  return {
    title,
    leftContentData,
    rightContentData,
    infoData,
    socialData,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    success,
    setSuccess,
    error,
    setError,
    form,
    sendEmail,
  };
}
