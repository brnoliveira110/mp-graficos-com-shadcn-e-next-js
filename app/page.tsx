import { Button } from "./ui/components/button";
import { SubTitle } from "./ui/layout/components/SubTitle";
import { TitleIcon } from "./ui/layout/components/TitleIcon";
import { TitleText } from "./ui/layout/components/TitleText";

export default function Home() {
  return (
    <div className="flex gap-4 items-center">
      <TitleIcon />
      <div className="flex flex-col w-full">
        <TitleText />
        <SubTitle />
      </div>
      <Button>Selecionar Data</Button>
    </div>
  );
}
