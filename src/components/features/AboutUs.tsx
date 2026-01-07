import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutUs: React.FC = () => {
  return (
    <>
      <section className="bg-brand-900 py-6 md:py-8">
        <Container>
          <SectionHeading variant="white">Wer wir sind</SectionHeading>
        </Container>
      </section>
      <section className="bg-sand py-8 md:py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-4 text-sm md:text-base text-brand-700 leading-relaxed">
            <p>
              Theo Milte - Bedachungen ist ein familiengefuehrter Meisterbetrieb mit Sitz in Castrop-Rauxel. Seit ueber
              25 Jahren stehen wir fuer handwerkliche Praezision, klare Kommunikation und langlebige Daecher.
            </p>
            <p className="font-semibold text-brand-900">
              Wir liefern keine Versprechen, sondern messbare Qualitaet.
            </p>
            <p>
              Von der ersten Beratung bis zur Abnahme haben Sie feste Ansprechpartner. Wir planen sauber, arbeiten
              termintreu und verlassen jede Baustelle so, wie wir sie gern vorfinden wuerden.
            </p>
            <p>
              Unser Team besteht aus erfahrenen Fachkraeften, die mit modernen Werkzeugen und geprueften Materialien
              arbeiten. So entstehen Daecher, die Substanz schuetzen und Werte sichern.
            </p>
            <p>
              <strong>Unsere Werte:</strong> Verbindlichkeit, Respekt und kompromisslose Qualitaet. Genau deshalb kommen
              unsere Kunden zu uns, wenn es wirklich zaehlen muss.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
