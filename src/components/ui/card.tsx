import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};
const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={cn(`rounded border border-white px-5 py-2`, className)}>
      {children}
    </div>
  );
};

export default Card;
