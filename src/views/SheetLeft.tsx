import { Cohorts } from "../components/Cohorts";
import { MiningForesting } from "../components/MiningForesting";

export const SheetLeft = () => {
  return (
    <div className="w-fit flex flex-col gap-y-8">
      <Cohorts />
      <MiningForesting />
    </div>
  );
};
