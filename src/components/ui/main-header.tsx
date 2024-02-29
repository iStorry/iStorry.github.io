import { MainActionMenu } from "y/components/ui/main-action-menu";
import { MainNav } from "y/components/ui/main-nav";

export function MainHeader() {
  return (
    <>
      <div className="flex items-center gap-4">
        <MainNav />
      </div>
      <div className="flex gap-4">{/* <MainActionMenu /> */}</div>
    </>
  );
}
