interface ISectionHeadingProps {
  children: React.ReactNode;
  variant?: 'blue' | 'white';
}

export const SectionHeading: React.FC<ISectionHeadingProps> = ({
  children,
  variant = 'blue',
}) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-brand-900';

  return (
    <h2 className={`text-xl md:text-2xl lg:text-3xl font-semibold font-display text-center tracking-wide ${textColor}`}>
      {children}
    </h2>
  );
};
