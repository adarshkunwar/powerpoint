import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};
const Card = ({ children }: CardProps) => {
  return (
    <div className={"rounded border border-white px-5 py-2"}>{children}</div>
  );
};

export default Card;
