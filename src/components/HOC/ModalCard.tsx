import Button from "../ui/button";
import Card from "../ui/card";
import { ReactNode } from "react";

type ModalCardProps = {
  onCross: () => void;
  children: ReactNode;
};

const ModalCard = ({ onCross, children }: ModalCardProps) => {
  return (
    <Card>
      <div className="flex justify-end">
        <Button onclick={onCross} text="X" />
      </div>
      <div>{children}</div>
    </Card>
  );
};
export default ModalCard;
