import { useState } from 'react';
import { Header } from './components/layout/Header';
import { SubHeader } from './components/layout/SubHeader';
import { HeroSection } from './components/features/HeroSection';
import { ImageSection } from './components/features/ImageSection';
import { ImageCarousel } from './components/features/ImageCarousel';
import { VideoSection } from './components/features/VideoSection';
import { CompanyInfo } from './components/features/CompanyInfo';
import { CTASection } from './components/features/CTASection';
import { SectionHeading } from './components/ui/SectionHeading';
import { BenefitsGrid } from './components/features/BenefitsGrid';
import { DayAtWork } from './components/features/DayAtWork';
import { Requirements } from './components/features/Requirements';
import { UnhappyAtWork } from './components/features/UnhappyAtWork';
import { AboutUs } from './components/features/AboutUs';
import { LocationMap } from './components/features/LocationMap';
import { Footer } from './components/layout/Footer';
import { ApplicationQuiz } from './components/features/ApplicationQuiz';
import { ICompanyProfile } from './types';
import { benefits } from './data/benefits';
import teamImage from './assets/image/team.avif';
import teamBackImage from './assets/image/team_back.avif';
import handshakeImage from './assets/image/handschake.avif';
import twoManImage from './assets/image/two_man.avif';
import mitarbeiterVideo from './assets/video/video.mp4';

function App() {
  const [showInquiry, setShowInquiry] = useState(false);

  const companyProfile: ICompanyProfile = {
    title: 'Theo Milte - Bedachungen. Dachsanierung, Reparatur und Neubau in Castrop-Rauxel.',
    location: 'Castrop-Rauxel und Umgebung',
    company: 'Theo Milte - Bedachungen',
    type: 'Meisterbetrieb',
    startDate: 'seit ueber 25 Jahren',
    benefits: [
      'Meisterqualitaet mit geprueften Materialien und sauberer Ausfuehrung.',
      'Transparente Angebote, klare Zeitfenster und feste Ansprechpartner.',
      'Termintreue Umsetzung und Baustellen, die Sie wieder gern betreten.',
    ],
  };

  const handleInquiry = () => {
    setShowInquiry(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showInquiry) {
    return <ApplicationQuiz onClose={() => setShowInquiry(false)} />;
  }

  return (
    <div className="min-h-screen site-shell text-ink font-body">
      <Header />
      <SubHeader text="Meisterbetrieb fuer Bedachungen in Castrop-Rauxel und Umgebung." />
      <HeroSection
        title={companyProfile.title}
        benefits={companyProfile.benefits}
      />
      <CompanyInfo
        company={companyProfile.company}
        location={companyProfile.location}
        type={companyProfile.type}
        startDate={companyProfile.startDate}
      />
      <ImageSection
        imageUrl={teamImage}
        alt="Team von Theo Milte - Bedachungen"
      />
      <CTASection
        onApply={handleInquiry}
        buttonText="Kostenlose Beratung sichern"
        subText="Rueckmeldung in der Regel innerhalb von 24 Stunden."
      />

      <section className="bg-brand-900 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading variant="white">
            Leistungen und Versprechen, die langfristig schuetzen
          </SectionHeading>
        </div>
      </section>
      <BenefitsGrid benefits={benefits} />
      <CTASection
        onApply={handleInquiry}
        buttonText="Projekt starten"
        subText="Kurze Anfrage, klares Angebot."
      />

      <ImageCarousel
        images={[
          {
            url: handshakeImage,
            alt: 'Verbindliche Beratung vor Ort',
          },
          {
            url: twoManImage,
            alt: 'Praezise Ausfuehrung im Team',
          },
        ]}
      />

      <DayAtWork />

      <ImageSection
        imageUrl={teamImage}
        alt="Fachkraefte bei Dacharbeiten"
      />

      <Requirements />

      <CTASection
        onApply={handleInquiry}
        buttonText="Termin anfragen"
        subText="Wir melden uns mit einem passenden Vorschlag."
      />

      <ImageSection
        imageUrl={teamBackImage}
        alt="Montage-Team auf dem Dach"
      />

      <UnhappyAtWork />

      <section className="bg-brand-900 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading variant="white">
            Sie haben bereits einen Eindruck von uns
          </SectionHeading>
        </div>
      </section>

      <CTASection
        onApply={handleInquiry}
        buttonText="Jetzt beraten lassen"
        subText="Persoenlich, praezise und ohne Umwege."
      />

      <VideoSection
        videoUrl={mitarbeiterVideo}
      />

      <AboutUs />

      <CTASection
        onApply={handleInquiry}
        buttonText="Geschaeftstermin vereinbaren"
        subText="Wir freuen uns auf Ihr Projekt."
      />

      <LocationMap />

      <Footer />
    </div>
  );
}

export default App;
