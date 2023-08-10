import { useState } from "react";
import ResourceProduction from "../assets/Icons/ResourceProduction.png";
import Resource from "../assets/Icons/Resource.png";
import Servant from "../assets/Icons/Servant.png";
import { ScribbleBox } from "./ScribbleBox";

export const MiningForesting = () => {
  const icons = Array(14)
    .fill(undefined)
    .map((_, i) => (i % 3 === 1 ? [ResourceProduction, Resource] : undefined));
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheck = () => {
    setCheckedCount(checkedCount + 1);
  };

  const handleUncheck = () => {
    setCheckedCount(checkedCount - 1);
  };

  return (
    <div className="flex h-10 w-full items-center justify-around gap-x-1 rounded-sm pl-2">
      <div
        className="uppercase text-sm bg-slate-800 py-1 px-4 flex items-center"
        style={{
          clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}>
        <span className="w-24">Mining & Foresting</span>
        <img src={Servant} alt="Servant" className="h-8" />
      </div>
      {icons.map((icon, index) => (
        <ScribbleBox
          key={index}
          uncheckedIcons={icon}
          checkable={index === checkedCount}
          isRightMostChecked={index === checkedCount - 1}
          onCheck={handleCheck}
          onUncheck={handleUncheck}
          width={index % 3 === 1 ? 2 : 1}
          extraWidth={index % 3 === 1}
        />
      ))}
    </div>
  );
};
