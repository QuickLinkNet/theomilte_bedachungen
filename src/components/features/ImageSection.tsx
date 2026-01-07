import { Container } from '../ui/Container';

interface IImageSectionProps {
  imageUrl: string;
  alt: string;
}

export const ImageSection: React.FC<IImageSectionProps> = ({ imageUrl, alt }) => {
  return (
    <section className="bg-sand py-8 md:py-12">
      <Container maxWidth="lg">
        <div className="rounded-2xl overflow-hidden shadow-card">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};
