import { useMemo } from "react";
import ListCard from "../HOC/listCard";

const NotificationList = () => {
  const notificationListArray = useMemo(() => new Array(5).fill("_"), []);

  return notificationListArray.map((_, index) => {
    return (
      <ListCard key={index} onCheck={() => {}} onCross={() => {}}>
        <p>hi</p>
      </ListCard>
    );
  });
};
export default NotificationList;
