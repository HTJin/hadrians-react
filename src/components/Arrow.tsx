const Arrow = ({ width = 1, specialCase = false }) => {
  if (specialCase) {
    switch (width) {
      case 3:
        return (
          <div
            className="flex justify-around"
            style={{ width: `${1.75 * 3}rem` }}
          >
            <div className="h-10 w-0.5 bg-slate-50"></div>
            <div
              className="h-10 w-0.5 bg-slate-50"
              style={{ marginLeft: "0.875rem" }}
            ></div>
          </div>
        );
      case 2:
        return (
          <div
            className="flex justify-center"
            style={{ width: `${1.75 * 2}rem` }}
          >
            <div className="h-10 w-0.5 bg-slate-50"></div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div
      className="flex justify-around"
      style={{ width: `${1.75 * width}rem` }}
    >
      {Array.from({ length: width }).map(() => (
        <div className="h-10 w-0.5 bg-slate-50"></div>
      ))}
    </div>
  );
};

export default Arrow;
