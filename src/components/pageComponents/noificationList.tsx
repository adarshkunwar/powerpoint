import ListCard from "../HOC/listCard";

const notificationListArray = Array.from({ length: 5 }).fill("_");
const NotificationList = () => {
  return notificationListArray.map((_, index) => {
    return (
      <ListCard key={index} onCheck={() => {}} onCross={() => {}}>
        <p>hi</p>
      </ListCard>
    );
  });
};
export default NotificationList;
