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
      {/* delete button */}
      <div className="flex justify-end">
        <Button onclick={onCross} text="X" />
      </div>
      {/* children */}
      <div>{children}</div>
    </Card>
  );
};
export default ModalCard;
