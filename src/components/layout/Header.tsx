import { Container } from '../ui/Container';
import logoImage from '../../assets/image/logo.avif';

export const Header: React.FC = () => {
  return (
    <header className="bg-sand/90 py-4 md:py-6 border-b border-stone/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-center">
          <img
            src={logoImage}
            alt="Theo Milte - Bedachungen"
            className="h-12 md:h-16 lg:h-20 w-auto drop-shadow-sm"
          />
        </div>
      </Container>
    </header>
  );
};
