import { Container } from '../ui/Container';
import { MapPin, Clock, Briefcase } from 'lucide-react';

interface ICompanyInfoProps {
  company: string;
  location: string;
  type: string;
  startDate: string;
}

export const CompanyInfo: React.FC<ICompanyInfoProps> = ({ company, location, type, startDate }) => {
  return (
    <section className="bg-sand py-6 md:py-8">
      <Container>
        <div className="text-center space-y-3 text-brand-700">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent-500" fill="currentColor" />
            <p className="text-sm md:text-base font-semibold text-brand-900">{company}</p>
          </div>

          <p className="text-sm md:text-base">
            in {location}
          </p>

          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4 text-brand-600" />
              <span>{type}</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-brand-600" />
              <span>{startDate}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
