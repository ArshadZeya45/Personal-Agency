import { Faq } from "@/types/faq";
import FaqItem from "./FaqItem";

type Props = {
  faqs: Faq[];
};
const FaqAccordion = ({ faqs }: Props) => {
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};
export default FaqAccordion;
