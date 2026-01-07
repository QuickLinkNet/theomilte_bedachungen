import { Container } from '../ui/Container';
import { CheckCircle2 } from 'lucide-react';

interface IHeroSectionProps {
  title: string;
  benefits: string[];
}

export const HeroSection: React.FC<IHeroSectionProps> = ({ title, benefits }) => {
  return (
    <section className="bg-brand-900 py-10 md:py-14">
      <Container>
        <div className="text-center text-white space-y-6 animate-fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-display leading-tight px-4">
            {title}
          </h2>

          <div className="space-y-3 text-sm md:text-base">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 md:gap-3">
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-accent-400" />
                <p className="text-sand/90">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
