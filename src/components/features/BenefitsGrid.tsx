import { Container } from '../ui/Container';
import { BenefitCard } from '../ui/BenefitCard';
import { LucideIcon } from 'lucide-react';

export interface IBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

interface IBenefitsGridProps {
  benefits: IBenefit[];
}

export const BenefitsGrid: React.FC<IBenefitsGridProps> = ({ benefits }) => {
  return (
    <section className="bg-sand py-8 md:py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconColor={benefit.iconColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
