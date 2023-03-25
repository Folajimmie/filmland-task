const buttonBaseClassName =
  'w-full h-[51px] text-button rounded-[8px] hover:opacity-90 disabled:cursor-not-allowed';

export const DefaultButton = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      className={`${buttonBaseClassName} text-white bg-primary ${className}`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};