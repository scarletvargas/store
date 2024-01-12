interface Props {
  type: string;
  placeholder: string;
  id?: string;
  value: string;
  onChange?: () => void;
}

export const Input = ({ type, placeholder, id, value, onChange }: Props) => {
  return (
    <input
      className="p-3 rounded-lg border border-border bg-background text-contrast-light"
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
};
