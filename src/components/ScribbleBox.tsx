import { useState } from "react";
import Scribble1 from "../assets/s1.png";

interface ScribbleBoxProps {
  uncheckedIcons: string[];
  checkable: boolean;
  isRightMostChecked: boolean;
  onCheck: () => void;
  onUncheck: () => void;
  width?: number;
}

const UncheckedIcon: React.FC<{
  uncheckedIcons: string[];
}> = ({ uncheckedIcons }) => {
  return uncheckedIcons?.map((icon, index) =>
    icon ? (
      <img key={index} src={icon} alt="Unchecked Icon" className="h-full" />
    ) : (
      <div className="h-full w-full bg-slate-100"></div>
    ),
  );
};

export const ScribbleBox = ({
  uncheckedIcons,
  checkable,
  isRightMostChecked,
  onCheck,
  onUncheck,
  width = 1,
}: ScribbleBoxProps) => {
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    if (checked && isRightMostChecked) {
      setChecked(false);
      onUncheck();
    } else if (checkable && !checked) {
      setChecked(true);
      onCheck();
    }
  };

  return (
    <div
      className="relative flex h-7 cursor-pointer justify-center rounded-sm border bg-slate-50 bg-cover"
      style={{
        width: `${1.75 * width}rem`,
      }}
      onClick={toggleCheck}
    >
      <div className="absolute inset-0 z-10">
        {checked ? (
          <img src={Scribble1} alt="Checked Icon" className="h-full w-full" />
        ) : null}
      </div>
      <UncheckedIcon uncheckedIcons={uncheckedIcons} />
    </div>
  );
};
