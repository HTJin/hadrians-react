import { Cohorts } from "../components/Cohorts";
import { MiningForesting } from "../components/MiningForesting";
import { WallGuard } from "../components/WallGuard";

export const SheetLeft = () => {
  return (
    <div className="w-fit flex flex-col gap-y-8 mt-8">
      <Cohorts />
      <MiningForesting />
      <WallGuard />
    </div>
  );
};
