import { fadeIn } from "../../Motion/Vairants";
import { motion } from "framer-motion";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import useContactMeData from "./useContactMeData";

function ContactMeMain() {
  const { title } = useContactMeData();
  return (
    <div
      id="contact"
      className=" max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <motion.h2
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="text-cyan text-6xl mb-10 text-center"
      >
        {title}
      </motion.h2>
      <div className="flex  justify-between gap-24 bg-black rounded-2xl p-8 lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
}

export default ContactMeMain;
