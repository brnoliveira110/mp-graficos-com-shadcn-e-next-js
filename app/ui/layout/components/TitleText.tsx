import { cn } from "@/app/lib/utils";
import { splineSansMono } from "../../fonts";

export function TitleText() {
  return (
    <h1
      className={cn(
        splineSansMono.className,
        "font-bold text-[30px] text-[#28262A]"
      )}
    >
      Gastos dos Senadores Brasileiros
    </h1>
  );
}
