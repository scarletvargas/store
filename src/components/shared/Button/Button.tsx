import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  variant: "black" | "white" | "transparent" | "default";
  className?: string;
  children: React.ReactNode;
  type?: "link";
  href?: string;
}

export const Button = ({
  onClick,
  children,
  variant,
  className,
  type,
  href,
}: ButtonProps) => {
  const variants: { [key in ButtonProps["variant"]]: string } = {
    black:
      "bg-black text-white rounded-lg py-2 px-4",
    white:
      "bg-white text-black hover:bg-text border rounded-lg border-border py-2 px-4",
    transparent:
      "bg-transparent text-white hover:border-white border rounded-lg border-border py-2 px-4",
    default: "",
  };

  const variantClass = variants[variant] || "";
  return (
    <>
      {type === "link" ? (
        <Link
          href={href || ""}
          className={`flex flex-row items-center gap-2 justify-center font-medium whitespace-nowrap ${variantClass} ${className}`}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`flex flex-row items-center gap-2 justify-center font-medium whitespace-nowrap ${variantClass} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};
