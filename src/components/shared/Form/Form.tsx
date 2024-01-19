interface Props {
  children: React.ReactNode;
  onSubmit: () => void;
  nameForm: string;
}

export const Form = ({ children, onSubmit, nameForm }: Props) => {
  return (
    <form
      className="bg-contrast-dark flex flex-col justify-between w-full max-w-[500px] p-4 gap-6 rounded-xl border border-border"
      onSubmit={onSubmit}
    >
      <h2 className="text-contrast-light text-[28px] font-medium">
        {nameForm}
      </h2>
      {children}
    </form>
  );
};
