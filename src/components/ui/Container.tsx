import { IContainerProps } from '../../types';
import { CONTAINER_WIDTHS } from '../../constants/theme';

export const Container: React.FC<IContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
}) => {
  return (
    <div className={`mx-auto px-4 md:px-6 lg:px-8 w-full ${CONTAINER_WIDTHS[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};
