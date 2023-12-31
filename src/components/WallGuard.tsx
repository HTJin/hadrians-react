import { useState } from "react";
import Cohort from "../assets/Icons/Cohort.png";
import Discipline from "../assets/Icons/Discipline.png";
import Sword from "../assets/Icons/Sword.png";
import Soldier from "../assets/Icons/Soldier.png";
import { ScribbleBox } from "./ScribbleBox";

export const WallGuard = () => {
  const iconsPattern = [[Cohort], [Discipline], [Cohort]];
  const repeatedPattern = [[], [Discipline], [Cohort]];
  const icons = [...iconsPattern, ...Array(5).fill(repeatedPattern).flat()];
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
        className="ml-1 flex items-center rounded-sm bg-slate-800 px-4 py-1 text-sm uppercase"
        style={{
          clipPath: "polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <span className="w-14">Wall Guard</span>
        <img src={Sword} alt="Sword" className="h-8" /> /
        <img src={Soldier} alt="Soldier" className="ml-1 h-8" />
      </div>
      {icons.map((icon, index) => (
        <ScribbleBox
          key={index}
          uncheckedIcons={icon}
          checkable={index === checkedCount}
          isRightMostChecked={index === checkedCount - 1}
          onCheck={handleCheck}
          onUncheck={handleUncheck}
        />
      ))}
    </div>
  );
};
