import { Container } from '../ui/Container';

export const LocationMap: React.FC = () => {
  return (
    <section className="bg-sand py-8 md:py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.google.com/maps?q=Theo+Milte+Bedachungen,+44579+Castrop-Rauxel&output=embed"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl shadow-card"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Theo Milte - Bedachungen"
            />
          </div>
          <p className="text-center text-xs md:text-sm text-brand-700 mt-4">
            Standort: Theo Milte - Bedachungen, 44579 Castrop-Rauxel
          </p>
        </div>
      </Container>
    </section>
  );
};
