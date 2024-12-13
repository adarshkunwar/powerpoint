type ButtonProps = {
  text: string;
} & (
  | {
      link: string;
      onclick?: never;
    }
  | {
      onclick: () => void;
      link?: never;
    }
);

const Button = ({ text, link, onclick }: ButtonProps) => {
  const commonProps = {
    className:
      "relative z-10 rounded border border-black bg-transparent px-5 py-2",
    role: "button",
    "aria-label": text,
  };

  const content = (
    <div className="group relative w-fit overflow-hidden rounded">
      {link ? (
        <a href={link} {...commonProps}>
          {text}
        </a>
      ) : (
        <button onClick={onclick} {...commonProps}>
          {text}
        </button>
      )}
      <div className="absolute inset-y-0 left-0 right-full bg-red-300 transition-all duration-300 group-hover:right-0" />
    </div>
  );

  return content;
};

export default Button;
