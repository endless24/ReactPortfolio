import SingleContactMeSocial from "./SingleContactMeSocial";
import useContactMeData from "./useContactMeData";

function ContactMeSocial() {
  const { socialData } = useContactMeData();

  return (
    <div className="flex  gap-4">
      {socialData.map((social, index) => (
        <SingleContactMeSocial key={index} social={social} />
      ))}
    </div>
  );
}

export default ContactMeSocial;
