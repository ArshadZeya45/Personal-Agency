import { contactInfo } from "@/data/contact";
import ContactInfoCard from "./ContactInfoCard";
import SocialLinks from "./SocialLinks";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-text">
        Reach Out{" "}
        <span
          className="
              bg-gradient-to-r
              from-blue
              to-cyan

              bg-clip-text
              text-transparent
            "
        >
          Directly
        </span>
      </h2>
      <p className="mt-6 max-w-xl text-muted leading-8">
        Fill out the form, or reach out to us using the details below. We aim to
        respond to all inquiries within 24 hours.
      </p>
      <div className="mt-12 space-y-8">
        {contactInfo.map((item) => (
          <ContactInfoCard key={item.title} item={item} />
        ))}
      </div>
      <SocialLinks />
    </div>
  );
};
export default ContactInfo;
