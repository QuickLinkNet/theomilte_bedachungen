import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Wrench, Users, HardHat, Home } from 'lucide-react';

interface IDayItem {
  icon: React.ReactNode;
  text: string;
}

const dayItems: IDayItem[] = [
  {
    icon: <Wrench className="w-5 h-5 flex-shrink-0" />,
    text: 'Bestandsaufnahme und Beratung: Wir pruefen Dachflaeche, Anschluesse und Unterkonstruktion direkt vor Ort und dokumentieren den Zustand.',
  },
  {
    icon: <Users className="w-5 h-5 flex-shrink-0" />,
    text: 'Planung und Angebot: Sie erhalten ein transparentes Angebot mit klaren Materialvorschlaegen, Zeitfenstern und nachvollziehbaren Positionen.',
  },
  {
    icon: <HardHat className="w-5 h-5 flex-shrink-0" />,
    text: 'Ausfuehrung und Schutz: Saubere Baustelle, Schutz von Fassade und Aussenflaechen sowie termintreue Umsetzung mit festen Ansprechpartnern.',
  },
  {
    icon: <Home className="w-5 h-5 flex-shrink-0" />,
    text: 'Abnahme und Wartung: Gemeinsame Abnahme, Fotodokumentation und auf Wunsch ein Wartungsplan fuer langfristige Sicherheit.',
  },
];

export const DayAtWork: React.FC = () => {
  return (
    <>
      <section className="bg-brand-900 py-6 md:py-8">
        <Container>
          <SectionHeading variant="white">
            So laeuft Ihr Dachprojekt
          </SectionHeading>
        </Container>
      </section>
      <section className="bg-sand py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {dayItems.map((item, index) => (
              <div key={index} className="flex gap-3 md:gap-4 items-start">
                <div className="flex-shrink-0 text-accent-500 mt-0.5">
                  {item.icon}
                </div>
                <p className="text-sm md:text-base text-brand-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
