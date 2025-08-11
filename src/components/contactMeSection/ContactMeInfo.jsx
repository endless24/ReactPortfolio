import SingleInfo from "./SingleInfo";
import useContactMeData from "./useContactMeData";

function ContactMeInfo() {
  const { infoData } = useContactMeData();

  return (
    <div className="flex flex-col gap-4 ">
      {infoData.map((info, index) => (
        <SingleInfo key={index} info={info} />
      ))}
    </div>
  );
}

export default ContactMeInfo;
