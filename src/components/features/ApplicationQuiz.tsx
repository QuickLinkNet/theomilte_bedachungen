import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { RejectionPage } from './RejectionPage';
import { QuizStepContent } from './ApplicationQuizSteps';
import logoImage from '../../assets/image/logo.avif';

interface QuizAnswer {
  question: string;
  answer: string;
}

export const ApplicationQuiz: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showRejection, setShowRejection] = useState(false);
  const [selectedObjectTypes, setSelectedObjectTypes] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptPrivacy: false,
  });

  const totalQuestions = 7;

  useEffect(() => {
    window.history.pushState({ question: 1 }, '', '');

    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.rejection) {
        window.history.go(-1);
      } else if (event.state && event.state.question) {
        setCurrentQuestion(event.state.question);
        setShowRejection(false);
        setAnswers(prev => prev.slice(0, event.state.question - 1));
        setSelectedObjectTypes([]);
        setSelectedNeeds([]);
      } else {
        onClose();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onClose]);

  const handleAnswerQuestion1 = (answer: string) => {
    const newAnswer: QuizAnswer = {
      question: 'Was benoetigen Sie?',
      answer,
    };
    setAnswers([...answers, newAnswer]);
    setCurrentQuestion(2);
    window.history.pushState({ question: 2 }, '', '');
  };

  const handleAnswerQuestion2 = (answer: string) => {
    const newAnswer: QuizAnswer = {
      question: 'Wann soll die Umsetzung erfolgen?',
      answer,
    };
    setAnswers([...answers, newAnswer]);
    setCurrentQuestion(3);
    window.history.pushState({ question: 3 }, '', '');
  };

  const handleAnswerQuestion3 = (answer: string) => {
    const newAnswer: QuizAnswer = {
      question: 'Liegt das Objekt im Umkreis von 30 km um Castrop-Rauxel?',
      answer,
    };
    setAnswers([...answers, newAnswer]);

    if (answer === 'Nein') {
      window.history.pushState({ rejection: true }, '', '');
      setShowRejection(true);
    } else {
      setCurrentQuestion(4);
      window.history.pushState({ question: 4 }, '', '');
    }
  };

  const toggleObjectType = (type: string) => {
    if (type === 'Weiss ich nicht') {
      setSelectedObjectTypes(['Weiss ich nicht']);
    } else {
      setSelectedObjectTypes(prev => {
        const filtered = prev.filter(t => t !== 'Weiss ich nicht');
        if (filtered.includes(type)) {
          return filtered.filter(t => t !== type);
        }
        return [...filtered, type];
      });
    }
  };

  const handleSubmitQuestion4 = () => {
    const selectedAnswer = selectedObjectTypes.length > 0 ? selectedObjectTypes.join(', ') : 'Keine Auswahl';
    const newAnswer: QuizAnswer = {
      question: 'Um welchen Objekttyp handelt es sich?',
      answer: selectedAnswer,
    };
    setAnswers([...answers, newAnswer]);
    setSelectedObjectTypes([]);
    setCurrentQuestion(5);
    window.history.pushState({ question: 5 }, '', '');
  };

  const toggleNeed = (need: string) => {
    setSelectedNeeds(prev => {
      if (prev.includes(need)) {
        return prev.filter(n => n !== need);
      }
      return [...prev, need];
    });
  };

  const handleSubmitQuestion5 = () => {
    const selectedAnswer = selectedNeeds.length > 0 ? selectedNeeds.join(', ') : 'Keine Auswahl';
    const newAnswer: QuizAnswer = {
      question: 'Was ist der aktuelle Zustand?',
      answer: selectedAnswer,
    };
    setAnswers([...answers, newAnswer]);
    setSelectedNeeds([]);
    setCurrentQuestion(6);
    window.history.pushState({ question: 6 }, '', '');
  };

  const handleAnswerQuestion6 = (answer: string) => {
    const newAnswer: QuizAnswer = {
      question: 'Wie dringend brauchen Sie einen Termin?',
      answer,
    };
    setAnswers([...answers, newAnswer]);
    setCurrentQuestion(7);
    window.history.pushState({ question: 7 }, '', '');
  };

  const handleAnswerQuestion7 = (answer: string) => {
    const newAnswer: QuizAnswer = {
      question: 'Wann sollen wir Sie am besten erreichen?',
      answer,
    };
    setAnswers([...answers, newAnswer]);
    setCurrentQuestion(8);
    window.history.pushState({ question: 8 }, '', '');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (showRejection) {
    return <RejectionPage />;
  }

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col">
      {currentQuestion <= 7 && (
        <div className="bg-brand-900 py-6">
          <Container>
            <div className="flex justify-center mb-4">
              <img src={logoImage} alt="Theo Milte - Bedachungen" className="h-10" />
            </div>
            <div className="text-center">
              <p className="text-white text-sm mb-3">Frage {currentQuestion} von {totalQuestions}</p>
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalQuestions }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index < currentQuestion ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      )}

      {currentQuestion === 8 && (
        <div className="bg-brand-900 py-6">
          <Container>
            <div className="flex justify-center">
              <img src={logoImage} alt="Theo Milte - Bedachungen" className="h-10" />
            </div>
          </Container>
        </div>
      )}

      <Container>
        <div className="py-12 max-w-3xl mx-auto">
          <QuizStepContent
            currentQuestion={currentQuestion}
            selectedObjectTypes={selectedObjectTypes}
            selectedNeeds={selectedNeeds}
            isSubmitted={isSubmitted}
            formData={formData}
            onAnswerQuestion1={handleAnswerQuestion1}
            onAnswerQuestion2={handleAnswerQuestion2}
            onAnswerQuestion3={handleAnswerQuestion3}
            onToggleObjectType={toggleObjectType}
            onSubmitQuestion4={handleSubmitQuestion4}
            onToggleNeed={toggleNeed}
            onSubmitQuestion5={handleSubmitQuestion5}
            onAnswerQuestion6={handleAnswerQuestion6}
            onAnswerQuestion7={handleAnswerQuestion7}
            onFormChange={(data) => setFormData(data)}
            onFormSubmit={handleFormSubmit}
            onClose={onClose}
          />
        </div>
      </Container>

      {currentQuestion <= 8 && (
        <footer className="mt-auto bg-brand-900 py-4">
          <Container>
            <div className="flex justify-center gap-6 text-white text-sm">
              <a href="https://www.tm-dach-fassade.de/impressum/" className="hover:underline">Impressum</a>
              <a href="https://www.tm-dach-fassade.de/datenschutz/" className="hover:underline">Datenschutz</a>
            </div>
          </Container>
        </footer>
      )}
    </div>
  );
};
