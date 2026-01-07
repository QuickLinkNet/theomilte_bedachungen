import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';

interface ICTASectionProps {
  onApply: () => void;
  buttonText: string;
  subText: string;
}

export const CTASection: React.FC<ICTASectionProps> = ({ onApply, buttonText, subText }) => {
  return (
    <section className="bg-sand py-8 md:py-12">
      <Container>
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Button
            onClick={onApply}
            variant="primary"
            size="lg"
            icon={<CheckCircle className="w-5 h-5 md:w-6 md:h-6" />}
            className="w-full max-w-md"
          >
            {buttonText}
          </Button>
          <p className="text-sm md:text-base text-brand-700 text-center">
            {subText}
          </p>
        </div>
      </Container>
    </section>
  );
};
