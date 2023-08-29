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

  const renderFortScribbleBox = (icon: string[], index: number) => (
    <ScribbleBox
      key={index}
      uncheckedIcons={icon}
      checkable={index === checkedCount}
      isRightMostChecked={index === checkedCount - 1}
      onCheck={handleCheck}
      onUncheck={handleUncheck}
      width={fortWidths[index]}
    />
  );

  return (
    <div className="parent w-11/12 mx-auto gap-y-6">
      {Array.from({ length: 49 }).map((_, index) => {
        if (index < cippiIcons.length) {
          return (
            <div className={`div${index + 1}`}>
              {renderScribbleBox(cippiIcons[index], index)}
            </div>
          );
        } else if (index < cippiIcons.length + wallIcons.length) {
          return (
            <div className={`div${index + 1}`}>
              {renderScribbleBox(wallIcons[index - cippiIcons.length], index)}
            </div>
          );
        } else if (
          index <
          cippiIcons.length + wallIcons.length + fortIcons.length
        ) {
          const fortIndex = index - cippiIcons.length - wallIcons.length;
          return (
            <div className={`div${index + 1}`}>
              {renderFortScribbleBox(fortIcons[fortIndex], fortIndex)}
            </div>
          );
        }
        return null;
      })}
      <div className="div52">
        <div
          className="flex items-center rounded-sm bg-slate-800 px-4 py-1 text-sm uppercase"
          style={{
            clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
          }}
        >
          <span className="w-24">Cippi</span>
          <img src={Resource} alt="Resource" className="h-8" />
        </div>
      </div>
      <div className="div51">
        <div
          className="flex items-center rounded-sm bg-slate-800 px-4 py-1 text-sm uppercase"
          style={{
            clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
          }}
        >
          <span className="w-24">Wall</span>
          <img src={Resource} alt="Resource" className="h-8" />
        </div>
      </div>
      <div className="div50">
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
      </div>
    </div>
  );
};
