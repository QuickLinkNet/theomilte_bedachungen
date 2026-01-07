import { IButtonProps } from '../../types';

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60';

  const variants = {
    primary: 'bg-accent-500 hover:bg-accent-600 text-brand-900 shadow-soft',
    secondary: 'bg-transparent hover:bg-brand-50 text-brand-900 border border-brand-200',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base md:px-8 md:py-4 md:text-lg',
    lg: 'px-8 py-4 text-lg md:px-10 md:py-5 md:text-xl',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {icon && icon}
    </button>
  );
};
