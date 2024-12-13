"use client";
import React, { useState } from "react";

const sidebarData = [
  {
    id: 1,
    content: "slide 1",
  },
  {
    id: 2,
    content: "slide 2",
  },
  {
    id: 3,
    content: "slide 3",
  },
  {
    id: 4,
    content: "slide 4",
  },
];

const SidebarCard = () => {
  const [items, setItems] = useState(sidebarData);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index) => {
    console.log("handling dragstart");
    console.log(index);
    e.dataTransfer.setData("draggedItem", index);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    e.preventDefault();
    console.log(dropIndex);
    const draggedIndex = parseInt(e.dataTransfer.getData("draggedItem"), 10);
    if (draggedIndex === dropIndex) return;

    // Create a new reordered array
    const newItems = [...items];
    const [movedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, movedItem);
    setItems(newItems);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Handling handleDragOver");
    e.preventDefault(); // Allow drop
  };

  return (
    <main className="flex flex-col gap-4 justify-center items-center">
      {items.map((item, index) => {
        return (
          <div
            className="flex gap-4 items-start"
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            <section className="self-start text-sm">
              <b>{index + 1}</b>
              <p>*</p>
            </section>
            <section className="h-40">
              <div className="border-2 rounded-xl h-full w-60 text-sm">
                {item.content}
              </div>
            </section>
          </div>
        );
      })}
    </main>
  );
};

export default SidebarCard;
