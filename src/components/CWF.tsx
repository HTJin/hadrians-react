import { useState } from "react";
import Resource from "../assets/Icons/Resource.png";
import Builder from "../assets/Icons/Builder.png";
import Soldier from "../assets/Icons/Soldier.png";
import {
  cippiIcons,
  wallIcons,
  fortIcons,
  fortWidths,
} from "./CippiWallFortIcons";
import { ScribbleBox } from "./ScribbleBox";
import Arrow from "./Arrow";
import "./CippiWallFort.css";

export const CWF = () => {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheck = () => {
    setCheckedCount(checkedCount + 1);
  };

  const handleUncheck = () => {
    setCheckedCount(checkedCount - 1);
  };

  const renderScribbleBox = (icon: string[], index: number) => (
    <ScribbleBox
      key={index}
      uncheckedIcons={icon}
      checkable={index === checkedCount}
      isRightMostChecked={index === checkedCount - 1}
      onCheck={handleCheck}
      onUncheck={handleUncheck}
      width={Array.isArray(icon) && icon.length === 2 ? 2 : 1}
    />
  );

  const Cippi = () => (
    <div className="div52">
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
    </div>
  );

  const Wall = () => (
    <div className="div51">
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
    </div>
  );

  const Fort = () => (
    <div className="div50">
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
        {fortIcons.map((icon, index) => (
          <div className="flex flex-col items-center">
            <Arrow width={fortWidths[index]} />
            {renderScribbleBox(icon, index)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="parent">
      {Array.from({ length: 49 }).map((_, index) => (
        <div className={`div${index + 1}`}>
          {index < cippiIcons.length && (
            <div className={`div${index + 1}`}>
              {renderScribbleBox(cippiIcons[index], index)}
            </div>
          )}
          {index >= cippiIcons.length &&
            index < cippiIcons.length + wallIcons.length && (
              <div className={`div${index + 1}`}>
                {renderScribbleBox(wallIcons[index - cippiIcons.length], index)}
              </div>
            )}
          {index >= cippiIcons.length + wallIcons.length && (
            <div className={`div${index + 1}`}>
              {renderScribbleBox(
                fortIcons[index - (cippiIcons.length + wallIcons.length)],
                index,
              )}
            </div>
          )}
        </div>
      ))}
      <Cippi />
      <Wall />
      <Fort />
    </div>
  );
};
