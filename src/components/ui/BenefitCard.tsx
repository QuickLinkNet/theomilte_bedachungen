import { LucideIcon } from 'lucide-react';

interface IBenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export const BenefitCard: React.FC<IBenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  iconColor = 'text-accent-500',
}) => {
  return (
    <div className="flex gap-4 items-start rounded-2xl border border-stone/70 bg-white/80 p-4 shadow-card transition-transform duration-300 hover:-translate-y-1 animate-fade-up">
      <div className={`flex-shrink-0 ${iconColor} mt-0.5`}>
        <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="font-semibold text-sm md:text-base text-brand-900 leading-tight">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-brand-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
