import React from 'react';
import { X, Clock, Hourglass, Sun, Moon, User, Mail, Phone } from 'lucide-react';
import driverImage from '../../assets/image/two_man.avif';
interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  acceptPrivacy: boolean;
}
interface IQuizStepContentProps {
  currentQuestion: number;
  selectedObjectTypes: string[];
  selectedNeeds: string[];
  isSubmitted: boolean;
  formData: IFormData;
  onAnswerQuestion1: (answer: string) => void;
  onAnswerQuestion2: (answer: string) => void;
  onAnswerQuestion3: (answer: string) => void;
  onToggleObjectType: (type: string) => void;
  onSubmitQuestion4: () => void;
  onToggleNeed: (need: string) => void;
  onSubmitQuestion5: () => void;
  onAnswerQuestion6: (answer: string) => void;
  onAnswerQuestion7: (answer: string) => void;
  onFormChange: (data: IFormData) => void;
  onFormSubmit: (event: React.FormEvent) => void;
  onClose: () => void;
}
const questionOneOptions = ['Dachsanierung / Neueindeckung', 'Reparatur / Sturmschaden', 'Flachdach / Abdichtung', 'Dachfenster / Tageslicht', 'Etwas anderes'];
const questionTwoOptions = ['Sofort (Notfall)', 'In 1-3 Monaten', 'In 3-6 Monaten', 'Planbar / in Abstimmung'];
const questionFourOptions = ['Einfamilienhaus', 'Mehrfamilienhaus', 'Gewerbe / Halle', 'Garage / Anbau', 'Denkmalschutz', 'Weiss ich nicht'];
const questionFiveOptions = ['Undichtigkeit / Leckage', 'Sturm- oder Hagelschaden', 'Energetische Sanierung', 'Komplette Neueindeckung', 'Dachfenster erneuern', 'Wartung / Inspektion', 'Unklar, ich brauche eine Einschaetzung'];
const questionSevenOptions = [{ label: 'Jederzeit', icon: <Clock className="w-8 h-8" strokeWidth={2} /> }, { label: 'Vormittags 8-12 Uhr', icon: <Sun className="w-8 h-8" strokeWidth={2} /> }, { label: 'Nachmittags 12-18 Uhr', icon: <Sun className="w-8 h-8" strokeWidth={2} /> }, { label: 'Abends ab 18 Uhr', icon: <Moon className="w-8 h-8" strokeWidth={2} /> }];
const questionSixOptions = [{ label: 'Notfall / sofort', icon: <Clock className="w-16 h-16 text-white" strokeWidth={2} /> }, { label: '1 - 2 Wochen', icon: <Hourglass className="w-16 h-16 text-white" strokeWidth={2} /> }, { label: '1 - 2 Monate', icon: <Hourglass className="w-16 h-16 text-white" strokeWidth={2} /> }, { label: 'Flexibel', icon: <Hourglass className="w-16 h-16 text-white" strokeWidth={2} /> }];
export const QuizStepContent: React.FC<IQuizStepContentProps> = ({
  currentQuestion,
  selectedObjectTypes,
  selectedNeeds,
  isSubmitted,
  formData,
  onAnswerQuestion1,
  onAnswerQuestion2,
  onAnswerQuestion3,
  onToggleObjectType,
  onSubmitQuestion4,
  onToggleNeed,
  onSubmitQuestion5,
  onAnswerQuestion6,
  onAnswerQuestion7,
  onFormChange,
  onFormSubmit,
  onClose,
}) => {
  if (currentQuestion === 1) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Was benoetigen Sie?
        </h1>
        <div className="space-y-4 px-4">
          {questionOneOptions.map(option => (
            <button
              key={option}
              onClick={() => onAnswerQuestion1(option)}
              className="w-full bg-brand-700 hover:bg-brand-600 text-white py-4 px-6 rounded-lg text-left transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </>
    );
  }
  if (currentQuestion === 2) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Wann soll die Umsetzung erfolgen?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-2xl mx-auto">
          {questionTwoOptions.map(option => (
            <button
              key={option}
              onClick={() => onAnswerQuestion2(option)}
              className="bg-brand-700 hover:bg-brand-600 text-white py-6 px-6 rounded-lg transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </>
    );
  }
  if (currentQuestion === 3) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Liegt das Objekt im Umkreis von 30 km um Castrop-Rauxel?
        </h1>
        <div className="flex justify-center gap-6 px-4 max-w-2xl mx-auto">
          <button
            onClick={() => onAnswerQuestion3('Ja')}
            className="group flex-1 max-w-xs"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3">
              <img
                src={driverImage}
                alt="Ja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-brand-700 group-hover:bg-brand-600 text-white py-3 px-6 rounded-lg transition-colors text-center font-semibold">
              Ja
            </div>
          </button>
          <button
            onClick={() => onAnswerQuestion3('Nein')}
            className="group flex-1 max-w-xs"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-3 bg-brand-900 flex items-center justify-center">
              <X className="w-24 h-24 text-accent-500" strokeWidth={2.5} />
            </div>
            <div className="bg-brand-700 group-hover:bg-brand-600 text-white py-3 px-6 rounded-lg transition-colors text-center font-semibold">
              Nein
            </div>
          </button>
        </div>
      </>
    );
  }
  if (currentQuestion === 4) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Um welchen Objekttyp handelt es sich?
        </h1>
        <div className="space-y-3 px-4 max-w-2xl mx-auto mb-8">
          {questionFourOptions.map(option => (
            <button
              key={option}
              onClick={() => onToggleObjectType(option)}
              className="w-full bg-brand-700 hover:bg-brand-600 text-white py-4 px-6 rounded-lg flex items-center justify-between transition-colors"
            >
              <span className="text-left">{option}</span>
              <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center ${
                selectedObjectTypes.includes(option) ? 'bg-white' : 'bg-transparent'
              }`}>
                {selectedObjectTypes.includes(option) && (
                  <div className="w-3 h-3 rounded-full bg-brand-700" />
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center px-4">
          <button
            onClick={onSubmitQuestion4}
            disabled={selectedObjectTypes.length === 0}
            className="bg-accent-500 hover:bg-accent-600 text-brand-900 py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            Absenden
          </button>
        </div>
      </>
    );
  }
  if (currentQuestion === 5) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Was ist der aktuelle Zustand?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-4 max-w-3xl mx-auto mb-8">
          {questionFiveOptions.map(option => (
            <button
              key={option}
              onClick={() => onToggleNeed(option)}
              className="bg-brand-700 hover:bg-brand-600 text-white py-4 px-6 rounded-lg flex items-center justify-between transition-colors"
            >
              <span className="text-left text-sm">{option}</span>
              <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0 ml-3 ${
                selectedNeeds.includes(option) ? 'bg-white' : 'bg-transparent'
              }`}>
                {selectedNeeds.includes(option) && (
                  <div className="w-3 h-3 rounded-full bg-brand-700" />
                )}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center px-4">
          <button
            onClick={onSubmitQuestion5}
            disabled={selectedNeeds.length === 0}
            className="bg-accent-500 hover:bg-accent-600 text-brand-900 py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            Absenden
          </button>
        </div>
      </>
    );
  }
  if (currentQuestion === 6) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Wie dringend brauchen Sie einen Termin?
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-4xl mx-auto">
          {questionSixOptions.map(option => (
            <button
              key={option.label}
              onClick={() => onAnswerQuestion6(option.label)}
              className="group flex flex-col items-center"
            >
              <div className="bg-brand-700 group-hover:bg-brand-600 rounded-lg p-8 w-full aspect-square flex items-center justify-center mb-3 transition-colors">
                {option.icon}
              </div>
              <span className="text-center font-semibold text-brand-900 text-sm md:text-base">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </>
    );
  }
  if (currentQuestion === 7) {
    return (
      <>
        <h1 className="text-2xl md:text-3xl font-semibold font-display text-center mb-12 px-4 text-brand-900">
          Wann sollen wir Sie am besten erreichen?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-2xl mx-auto">
          {questionSevenOptions.map(option => (
            <button
              key={option.label}
              onClick={() => onAnswerQuestion7(option.label)}
              className="bg-brand-700 hover:bg-brand-600 text-white py-6 px-6 rounded-lg flex items-center gap-4 transition-colors"
            >
              <div className="flex-shrink-0">
                {option.icon}
              </div>
              <span className="text-left font-semibold">{option.label}</span>
            </button>
          ))}
        </div>
      </>
    );
  }
  if (currentQuestion === 8) {
    return (
      <>
        <div className="text-center mb-8">
          <div className="bg-brand-900 text-white py-3 px-6 rounded-lg inline-block mb-6">
            <h1 className="text-xl md:text-2xl font-semibold font-display">
              Perfekt, wir sind startklar.
            </h1>
          </div>
          <p className="text-lg font-semibold mb-2 text-brand-900">Wir melden uns innerhalb von 24 Stunden.</p>
          <p className="text-brand-700 mb-6">Teilen Sie uns kurz Ihre Kontaktdaten mit:</p>
          <p className="text-sm text-brand-600 mb-8">Ihre Angaben bleiben vertraulich.</p>
        </div>
        {isSubmitted ? (
          <div className="max-w-md mx-auto text-center space-y-4 px-4">
            <p className="text-brand-900 font-semibold">
              Vielen Dank. Wir melden uns schnellstmoeglich bei Ihnen.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-accent-500 hover:bg-accent-600 text-brand-900 py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Zurueck zur Seite
            </button>
          </div>
        ) : (
          <form onSubmit={onFormSubmit} className="max-w-md mx-auto space-y-4 px-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500" />
              <input
                type="text"
                placeholder="Vorname"
                value={formData.firstName}
                onChange={(e) => onFormChange({ ...formData, firstName: e.target.value })}
                required
                className="w-full pl-10 pr-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-accent-400/60 focus:border-transparent outline-none"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500" />
              <input
                type="text"
                placeholder="Nachname"
                value={formData.lastName}
                onChange={(e) => onFormChange({ ...formData, lastName: e.target.value })}
                required
                className="w-full pl-10 pr-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-accent-400/60 focus:border-transparent outline-none"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-500" />
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                value={formData.email}
                onChange={(e) => onFormChange({ ...formData, email: e.target.value })}
                required
                className="w-full pl-10 pr-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-accent-400/60 focus:border-transparent outline-none"
              />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-brand-500" />
                <span className="text-brand-600 text-sm">DE +49</span>
              </div>
              <input
                type="tel"
                placeholder="Telefonnummer"
                value={formData.phone}
                onChange={(e) => onFormChange({ ...formData, phone: e.target.value })}
                required
                className="w-full pl-24 pr-4 py-3 border border-stone rounded-lg focus:ring-2 focus:ring-accent-400/60 focus:border-transparent outline-none"
              />
            </div>
            <div className="flex items-start gap-3 pt-4">
              <input
                type="checkbox"
                id="privacy"
                checked={formData.acceptPrivacy}
                onChange={(e) => onFormChange({ ...formData, acceptPrivacy: e.target.checked })}
                required
                className="mt-1 w-4 h-4 text-accent-500 border-stone rounded focus:ring-accent-400/60"
              />
              <label htmlFor="privacy" className="text-sm text-brand-700">
                Ich akzeptiere die{' '}
                <a href="https://www.tm-dach-fassade.de/datenschutz/" className="text-brand-900 underline">
                  Datenschutzbestimmungen
                </a>
              </label>
            </div>
            <button
              type="submit"
              disabled={!formData.acceptPrivacy}
              className="w-full bg-accent-500 hover:bg-accent-600 text-brand-900 py-4 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Beratung anfragen
            </button>
            <div className="text-center pt-4">
              <p className="text-sm text-brand-600">
                Sichere Verbindung. Kein Spam.
              </p>
            </div>
          </form>
        )}
        <div className="mt-12 pt-8 border-t border-stone max-w-md mx-auto px-4">
          <h2 className="text-xl font-semibold text-center mb-6 text-brand-900">Wie geht es danach weiter?</h2>
          <div className="space-y-6">
            {[
              'Wir melden uns zeitnah und klaeren die wichtigsten Details.',
              'Gemeinsamer Vor-Ort-Termin oder eine erste Einschaetzung anhand von Fotos.',
              'Sie erhalten ein klares Angebot mit Zeitplan.',
            ].map((step, index) => (
              <div key={step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-900 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-brand-700 pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  return null;
};
