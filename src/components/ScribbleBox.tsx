import { useState } from "react";
import Scribble1 from "../assets/s1.png";

interface ScribbleBoxProps {
  uncheckedIcons?: string[] | string;
  checkable: boolean;
  isRightMostChecked: boolean;
  onCheck: () => void;
  onUncheck: () => void;
  width?: number;
  extraWidth?: boolean;
}

export const ScribbleBox = ({
  uncheckedIcons,
  checkable,
  isRightMostChecked,
  onCheck,
  onUncheck,
  width = 1,
  extraWidth = false,
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

  const renderUncheckedIcons = () => {
    if (typeof uncheckedIcons === "string") {
      return (
        <img src={uncheckedIcons} alt="Unchecked Icon" className="h-full" />
      );
    }
    return uncheckedIcons?.map((icon, index) =>
      icon ? (
        <img
          key={index}
          src={icon}
          alt="Unchecked Icon"
          className="h-full"
          style={{
            paddingRight: extraWidth ? "0.25rem" : undefined,
          }}
        />
      ) : (
        <div className="h-full w-full bg-slate-100"></div>
      )
    );
  };

  return (
    <div
      className="h-7 cursor-pointer rounded-sm border bg-slate-50 bg-cover flex justify-center"
      style={{
        width: `${1.75 * width + (extraWidth ? 0.75 : 0)}rem`,
      }}
      onClick={toggleCheck}>
      {checked ? (
        <img src={Scribble1} alt="Checked Icon" className="h-full w-full" />
      ) : (
        renderUncheckedIcons()
      )}
    </div>
  );
};
