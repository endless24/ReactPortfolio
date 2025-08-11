import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import ContactMeForm from "./ContactMeForm";
import useContactMeData from "./useContactMeData";

function ContactMeLeft() {
  const { leftContentData } = useContactMeData();

  const { title, description } = leftContentData;
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col gap-2 w-full"
    >
      <div>
        <h2 className="text-3xl text-yellow mb-4">{title}</h2>
        <p className="whitespace-pre-line">{description}</p>
      </div>
      <ContactMeForm />
    </motion.div>
  );
}

export default ContactMeLeft;
