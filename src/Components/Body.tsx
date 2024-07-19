// import React from 'react'

// import { useState } from "react";
import { useEffect, useState } from "react";
import Content from "./content";
import { bodyProps, dataArray } from "./Type";

// import { AiFillPlusSquare } from "react-icons/ai";

function Body({ ShowItem, onDelete, bgThemes }: bodyProps) {
  const [iconTextStatus, setIconTextStatus] = useState<{
    [key: number]: boolean;
  }>({});
  const [taskCount, setTaskCount] = useState<number>(0);

  useEffect(() => {
    //   const counts = Object.keys(iconTextStatus).length;
    const count = Object.values(iconTextStatus).filter(
      (status) => status === true
    ).length;
    console.log(`this is expected to increase by length, ${count}`);
    setTaskCount(count);
  }, [iconTextStatus]);

  return (
    <div className="max-h-screen p-5 mt-20 text-white w3-content">
      <div className="flex justify-between ">
        <div className="flex flex-row">
          <p className=" font-sans font-bold text-[#4EA8DE]">Tasks Created</p>
          <span className="ml-2 bg-[#262626] pl-1 pr-1 rounded-md">
            {dataArray.length}
          </span>
        </div>
        <div className="flex flex-row">
          <p className=" font-sans font-bold text-[#8284FA]">Concluded</p>
          <span className="ml-2 bg-[#262626] pl-1 pr-1 rounded-md">
            {taskCount} {""} of {""}
            {dataArray.length}
          </span>
        </div>
      </div>
      <Content
        bgThemes={bgThemes}
        showItem={ShowItem}
        iconTextStatus={iconTextStatus}
        setIconTextStatus={setIconTextStatus}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Body;
