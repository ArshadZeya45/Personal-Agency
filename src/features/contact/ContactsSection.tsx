import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-18">
      <div className="grid gap-16 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};
export default ContactsSection;
