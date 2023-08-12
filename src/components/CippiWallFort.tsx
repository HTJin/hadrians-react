import { useState } from "react";
import Resource from "../assets/Icons/Resource.png";
import Builder from "../assets/Icons/Builder.png";
import Soldier from "../assets/Icons/Soldier.png";
import {
  cippiIcons,
  wallIcons,
  fortIcons,
} from "../assets/Icons/CippiWallFortIcons";
import { ScribbleBox } from "./ScribbleBox";

export const CippiWallFort = () => {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheck = () => {
    setCheckedCount(checkedCount + 1);
  };

  const handleUncheck = () => {
    setCheckedCount(checkedCount - 1);
  };

  const renderScribbleBox = (
    icon: string | string[] | undefined,
    index: number,
  ) => (
    <ScribbleBox
      key={index}
      uncheckedIcons={icon}
      checkable={index === checkedCount}
      isRightMostChecked={index === checkedCount - 1}
      onCheck={handleCheck}
      onUncheck={handleUncheck}
      width={Array.isArray(icon) && icon.length === 2 ? 2 : 1} // Conditional width
    />
  );

  const Cippi = () => (
    <div className="flex h-10 w-full items-center justify-around gap-x-1 rounded-sm pl-2">
      <div
        className="flex items-center rounded-sm bg-slate-800 px-4 py-1 text-sm uppercase"
        style={{
          clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <span className="w-24">Cippi</span>
        <img src={Resource} alt="Resource" className="h-8" />
      </div>
      {cippiIcons.map(renderScribbleBox)}
    </div>
  );
  const Wall = () => (
    <div className="flex h-10 w-full items-center justify-around gap-x-1 rounded-sm pl-2">
      <div
        className="flex items-center rounded-sm bg-slate-800 px-4 py-1 text-sm uppercase"
        style={{
          clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <span className="w-24">Wall</span>
        <img src={Resource} alt="Resource" className="h-8" />
      </div>
      {wallIcons.map(renderScribbleBox)}
    </div>
  );
  const Fort = () => (
    <div className="flex h-10 w-full items-center justify-around gap-x-1 rounded-sm pl-2">
      <div
        className="flex items-center rounded-sm bg-slate-800 px-4 py-1 text-sm uppercase"
        style={{
          clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <span className="w-24">Fort</span>
        <img src={Builder} alt="Builder" className="mr-1 h-8" /> /
        <img src={Soldier} alt="Soldier" className="ml-1 h-8" />
      </div>
      {fortIcons.map(renderScribbleBox)}
    </div>
  );

  return (
    <div className="grid grid-flow-row gap-y-8">
      <Cippi />
      <Wall />
      <Fort />
    </div>
  );
};
