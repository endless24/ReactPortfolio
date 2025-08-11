import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import ContactMeInfo from "./ContactMeInfo";
import ContactMeSocial from "./ContactMeSocial";
import useContactMeData from "./useContactMeData";

function ContactMeRight() {
  const { rightContentData } = useContactMeData();

  const { image } = rightContentData;

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center justify-center gap-12"
    >
      <img src={image} alt="Contact Me" className="max-w-[300px]" />

      <ContactMeInfo />
      <ContactMeSocial />
    </motion.div>
  );
}

export default ContactMeRight;
