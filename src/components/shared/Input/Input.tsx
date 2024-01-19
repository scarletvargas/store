interface Props {
  type: string;
  placeholder: string;
  id?: string;
  value: string;
  className: string;
  onChange?: () => void;
}

export const Input = ({ type, placeholder, id, value, onChange, className }: Props) => {
  return (
    <input
      className={`p-3 rounded-lg border border-border bg-background text-contrast-light ${className}`}
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};
