import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

const requirements: string[] = [
  'Meistergefuehrte Ausfuehrung nach dem ZVDH-Regelwerk.',
  'Transparente Angebote mit klaren Positionen und nachvollziehbaren Preisen.',
  'Gepruefte Materialien und Hersteller-Garantien fuer lange Lebensdauer.',
  'Saubere Baustelle, Schutz von Garten, Fassade und Zuwegung.',
  'Feste Ansprechpartner und termingerechte Ausfuehrung.',
  'Fotodokumentation und Abnahmeprotokoll fuer Ihre Unterlagen.',
  'Wartung und Inspektion fuer dauerhaft sichere Daecher.',
];

export const Requirements: React.FC = () => {
  return (
    <>
      <section className="bg-brand-900 py-6 md:py-8">
        <Container>
          <SectionHeading variant="white">
            Unsere Qualitaetsstandards
          </SectionHeading>
        </Container>
      </section>
      <section className="bg-sand py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex gap-3 md:gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-moss mt-0.5" />
                <p className="text-sm md:text-base text-brand-700 leading-relaxed">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
