import Button from "../ui/button";
import Card from "../ui/card";
import { ReactNode } from "react";

type ModalCardProps = {
  onCheck: () => void;
  onCross: () => void;
  children: ReactNode;
};
const ListCard = ({ onCheck, onCross, children }: ModalCardProps) => {
  return (
    <Card>
      {/* children */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button onclick={onCheck} text="o" />
          <div>{children}</div>
        </div>

        {/* delete button */}

        <Button onclick={onCross} text="X" />
      </div>
    </Card>
  );
};
export default ListCard;
