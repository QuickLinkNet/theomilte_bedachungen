import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 py-12 md:py-16">
      <Container>
        <div className="text-center space-y-6">
          <div className="bg-brand-800 rounded-2xl p-8 inline-block shadow-card">
            <p className="text-white text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Theo Milte - Bedachungen
            </p>
            <p className="text-brand-100 text-xs md:text-sm mt-3">
              Meisterbetrieb fuer Dacharbeiten in Castrop-Rauxel und Umgebung
            </p>
          </div>
          <div className="flex justify-center gap-4 md:gap-6 mt-8">
            <a
              href="https://www.tm-dach-fassade.de/impressum/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-white text-xs md:text-sm transition-colors"
            >
              Impressum
            </a>
            <span className="text-brand-600">|</span>
            <a
              href="https://www.tm-dach-fassade.de/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-100 hover:text-white text-xs md:text-sm transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
