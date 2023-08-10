import { useState } from "react";
import Scribble1 from "../assets/s1.png";

interface ScribbleBoxProps {
  uncheckedIcon?: string;
  checkable: boolean;
  isRightMostChecked: boolean;
  onCheck: () => void;
  onUncheck: () => void;
}

export const ScribbleBox = ({
  uncheckedIcon,
  checkable,
  isRightMostChecked,
  onCheck,
  onUncheck,
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
      className="h-5 w-5 cursor-pointer rounded-sm border bg-slate-50 bg-cover"
      onClick={toggleCheck}
    >
      {checked ? (
        <img src={Scribble1} alt="Checked Icon" className="h-full w-full" />
      ) : (
        uncheckedIcon && (
          <img
            src={uncheckedIcon}
            alt="Unchecked Icon"
            className="h-full w-full"
          />
        )
      )}
    </div>
  );
};
