import {
  Shield,
  Home,
  Umbrella,
  Wrench,
  Sun,
  FileText,
  Clock,
  MapPin,
  Layers,
  Sparkles,
} from 'lucide-react';
import { IBenefit } from '../components/features/BenefitsGrid';

export const benefits: IBenefit[] = [
  {
    icon: Shield,
    title: 'Meisterbetrieb mit gepruefter Qualitaet',
    description:
      'Ausfuehrung nach ZVDH-Standard, dokumentiert und nachvollziehbar.',
    iconColor: 'text-accent-500',
  },
  {
    icon: Home,
    title: 'Dachsanierung und Neueindeckung',
    description:
      'Massgeschneiderte Loesungen fuer Einfamilienhaeuser, Mehrfamilienhaeuser und Gewerbeobjekte.',
    iconColor: 'text-brand-600',
  },
  {
    icon: Umbrella,
    title: 'Flachdach und Abdichtung',
    description:
      'Sichere Abdichtungen, Anschluesse und Entwaesserung fuer dauerhaften Schutz.',
    iconColor: 'text-moss',
  },
  {
    icon: Wrench,
    title: 'Reparatur und Sturmschaden',
    description:
      'Schnelle Hilfe bei Leckagen, Schaedigungen und akuten Problemen.',
    iconColor: 'text-accent-500',
  },
  {
    icon: Sun,
    title: 'Dachfenster und Tageslicht',
    description:
      'Mehr Licht, mehr Komfort, fachgerechter Einbau inkl. Anschlussdetails.',
    iconColor: 'text-brand-600',
  },
  {
    icon: Layers,
    title: 'Daemmung und Energieeffizienz',
    description:
      'Durchdachte Aufbauten, die Energie sparen und den Wohnkomfort erhoehen.',
    iconColor: 'text-moss',
  },
  {
    icon: FileText,
    title: 'Transparente Angebote',
    description:
      'Klare Positionen, erklaerte Materialien und verstaendliche Kostenstrukturen.',
    iconColor: 'text-accent-500',
  },
  {
    icon: Clock,
    title: 'Verbindliche Termine',
    description:
      'Strukturierte Planung und termintreue Ausfuehrung ohne Ueberraschungen.',
    iconColor: 'text-brand-600',
  },
  {
    icon: MapPin,
    title: 'Regional und schnell vor Ort',
    description:
      'Castrop-Rauxel und Umgebung mit kurzen Wegen und echtem Service.',
    iconColor: 'text-moss',
  },
  {
    icon: Sparkles,
    title: 'Saubere Baustelle, saubere Abnahme',
    description:
      'Schutz von Aussenbereichen, Fotodokumentation und klare Abnahmeprozesse.',
    iconColor: 'text-accent-500',
  },
];
