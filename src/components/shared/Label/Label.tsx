interface Props {
  children: React.ReactNode;
  htmlFor: string;
}

export const Label = ({ children, htmlFor }: Props) => {
  return (
    <label htmlFor={htmlFor} className="text-white">
      {children}
    </label>
  );
};
