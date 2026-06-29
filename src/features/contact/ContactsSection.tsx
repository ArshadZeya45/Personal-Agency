import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactsSection = () => {
  return (
    <section className="py-10 lg:py-18">
      <div className="grid gap-16 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
export default ContactsSection;
