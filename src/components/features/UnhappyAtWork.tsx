import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const UnhappyAtWork: React.FC = () => {
  return (
    <>
      <section className="bg-brand-900 py-6 md:py-8">
        <Container>
          <SectionHeading variant="white">
            Unzufrieden mit Ihrem Dach?
          </SectionHeading>
        </Container>
      </section>
      <section className="bg-sand py-8 md:py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="text-sm md:text-base text-brand-700 leading-relaxed">
              Undichtigkeiten, hohe Heizkosten oder sichtbare Schaeden sind klare Signale. Wir finden die Ursache und
              liefern eine saubere, dauerhafte Loesung.
            </p>
            <p className="text-sm md:text-base font-semibold text-brand-900">
              Sie moechten Klarheit, bevor Sie investieren? Dann starten wir mit einer fundierten Bestandsaufnahme.
            </p>
            <p className="text-sm md:text-base text-brand-700 leading-relaxed">
              Sie erhalten eine transparente Empfehlung mit Optionen, die zu Ihrem Objekt und Budget passen. Keine
              leeren Versprechen, sondern belastbare Entscheidungen.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
