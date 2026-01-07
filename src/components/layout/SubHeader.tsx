import { Container } from '../ui/Container';

interface ISubHeaderProps {
  text: string;
}

export const SubHeader: React.FC<ISubHeaderProps> = ({ text }) => {
  return (
    <div className="bg-brand-50 py-3 md:py-4">
      <Container>
        <p className="text-center text-sm md:text-base text-brand-700 font-medium tracking-wide">
          {text}
        </p>
      </Container>
    </div>
  );
};
