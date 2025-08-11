import useContactMeData from "./useContactMeData";

function ContactMeForm() {
  const {
    sendEmail,
    form,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    success,
    error,
  } = useContactMeData();

  return (
    <div>
      <div className="mb-4">
        {success && <p className="text-cyan">{success}</p>}
        {error && <p className="text-red">{error}</p>}
      </div>

      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <input
          name="from_name"
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          className="h-12 rounded-lg bg-darkBrown outline-none  px-2"
          required
        />
        <input
          name="from_email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="h-12 rounded-lg bg-darkBrown outline-none  px-2"
          required
        />
        <textarea
          name="message"
          value={message}
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
          className=" rounded-lg bg-darkBrown outline-none  px-2"
          rows="9"
          cols="50"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-cyan w-full  p-2 rounded-lg h-12 font-bold text-xl hover:bg-darkCyan transition-colors duration-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactMeForm;
