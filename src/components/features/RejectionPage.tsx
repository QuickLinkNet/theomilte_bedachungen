import { Container } from '../ui/Container';
import logoImage from '../../assets/image/logo.avif';

export const RejectionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50">
      <div className="bg-brand-900 py-6">
        <Container>
          <div className="flex justify-center">
            <img src={logoImage} alt="Theo Milte - Bedachungen" className="h-10" />
          </div>
        </Container>
      </div>

      <div className="bg-brand-900 py-8">
        <Container>
          <h1 className="text-white text-2xl md:text-3xl font-semibold font-display text-center">
            Vielen Dank fuer Ihre Anfrage.
          </h1>
        </Container>
      </div>

      <Container>
        <div className="py-12 max-w-3xl mx-auto px-4">
          <div className="space-y-6 text-center text-brand-700">
            <p>
              Aktuell betreuen wir Projekte vor allem im Umkreis von 30 km rund um Castrop-Rauxel.
            </p>
            <p>
              Damit wir unseren Qualitaetsanspruch und kurze Reaktionszeiten halten, nehmen wir Anfragen ausserhalb
              dieses Radius nur in Ausnahmefaellen an.
            </p>
            <p className="font-semibold text-brand-900">
              Sollten Sie in den naechsten Monaten ein Projekt in unserer Region planen, sprechen Sie uns gern an.
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-brand-700 text-white py-6 px-6 rounded-lg text-center">
              <p className="text-sm md:text-base">
                Tipp: Wenn Sie eine Anfrage aus unserem Einsatzgebiet haben, leiten Sie diese gern an uns weiter.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
