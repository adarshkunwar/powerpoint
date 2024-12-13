"use client";
import ModalCard from "@/components/HOC/ModalCard";
import NotificationList from "@/components/pageComponents/noificationList";

export default function Home() {
  return (
    <div>
      <NotificationList />
      <h1 className="text-3xl">Store it- the only storage option you need</h1>

      <ModalCard
        onCross={() => {
          console.log("cross");
        }}
      >
        modal
      </ModalCard>
    </div>
  );
}
