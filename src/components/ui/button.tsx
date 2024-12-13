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
  if (link) {
    return (
      <div className="group relative w-fit overflow-hidden rounded">
        <a href="">
          <button
            onClick={onclick}
            className="relative z-10 rounded border border-black bg-transparent px-5 py-2"
          >
            {text}
          </button>
        </a>
        <div className="absolute inset-y-0 left-0 right-full bg-red-300 transition-all duration-300 group-hover:right-0"></div>
      </div>
    );
  }

  if (onclick) {
    return (
      <div className="group relative w-fit overflow-hidden rounded">
        <button
          onClick={onclick}
          className="relative z-10 rounded border border-black bg-transparent px-5 py-2"
        >
          {text}
        </button>
        <div className="absolute inset-y-0 left-0 right-full bg-red-300 transition-all duration-300 group-hover:right-0"></div>
      </div>
    );
  }

  // This fallback should never happen because of strict type enforcement
  return null;
};

export default Button;
