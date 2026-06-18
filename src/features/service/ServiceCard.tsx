import Card from "@/components/ui/Card";
import { Service } from "@/types/service";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}
const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  return (
    <Card className="p-6 cursor-pointer hover:scale-105 transition-all duration-300 group hover:bg-cyan/10 hover:border-1.5 hover:border-cyan/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue/20 bg-blue/10 relative group-hover:rotate-15 transition-all duration-300">
        <Icon size={28} />
      </div>
      <h3 className="mt-8 text-lg font-semibold">{service.title}</h3>
      <p className="my-3 text-muted text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="absolute bottom-3 right-3 p-1.5 border border-cyan flex items-center justify-center rounded-lg bg-cyan/20 none opacity-0 group-hover:opacity-100 transition-all duration-200">
        <ArrowRight size={18} />
      </div>
    </Card>
  );
};
export default ServiceCard;
