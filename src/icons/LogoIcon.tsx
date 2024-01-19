export const LogoIcon = ({
  className,
  width = 24,
  height = 24,
  strokeWidth = 2,
}: PropsIcons) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8l4 -4" />
      <path d="M14 4l-10 10" />
      <path d="M4 20l16 -16" />
      <path d="M20 10l-10 10" />
      <path d="M20 16l-4 4" />
    </svg>
  );
};
