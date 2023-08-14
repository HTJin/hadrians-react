const Arrow = ({ width = 1 }) => {
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
