import { ContactInfoItem } from "@/types/contact";

type Props = {
  item: ContactInfoItem;
};

const ContactInfoCard = ({ item }: Props) => {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue/20 bg-blue/5 text-cyan">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="font-semibold text-muted">{item.title}</h4>
        <p className="mt-1 text-text">{item.value}</p>
      </div>
    </div>
  );
};
export default ContactInfoCard;
