import { useState } from "react";
import Cohort from "../assets/Icons/Cohort.png";
import CoLeft from "../assets/Icons/CoLeft.png";
import CoRight from "../assets/Icons/CoRight.png";
import CoUp from "../assets/Icons/CoUp.png";
import Discipline from "../assets/Icons/Discipline.png";
import Valour from "../assets/Icons/Valour.png";
import { ScribbleBox } from "./ScribbleBox";

export const Cohorts = () => {
  const icons = [
    undefined,
    undefined,
    Discipline,
    undefined,
    Valour,
    Discipline,
  ];
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheck = () => {
    setCheckedCount(checkedCount + 1);
  };

  const handleUncheck = () => {
    setCheckedCount(checkedCount - 1);
  };

  const renderCohort = (name: string, cohortIcon: string) => (
    <div className="flex items-center gap-x-4 pl-2">
      <img src={cohortIcon} alt={`${name} Cohort`} className="h-12 w-12" />
      <div className="-ml-4 w-14 text-sm uppercase leading-5">
        {name} Cohort
      </div>
      <img src={Cohort} alt="Cohort Icon" className="w-8" />
      <div
        className="flex h-10 w-full items-center justify-center gap-x-1 rounded-sm bg-red-600 pl-5 pr-2"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 5% 50%, 0% 0%)",
        }}
      >
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
    </div>
  );

  return (
    <div className="flex gap-x-4 divide-x">
      {renderCohort("Left", CoLeft)}
      {renderCohort("Center", CoUp)}
      {renderCohort("Right", CoRight)}
    </div>
  );
};
