import { Cohorts } from "../components/Cohorts";
import { MiningForesting } from "../components/MiningForesting";
import { WallGuard } from "../components/WallGuard";
// import { CippiWallFort } from "../components/CippiWallFort";
import { CWF } from "../components/CWF";

export const SheetLeft = () => {
  return (
    <div className="mt-8 grid w-fit grid-flow-row gap-y-8">
      <Cohorts />
      <MiningForesting />
      <WallGuard />
      {/* <CippiWallFort /> */}
      <CWF />
    </div>
  );
};
