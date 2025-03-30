import { cn } from "@/app/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/hoverCard";
import { InfoIcon } from "lucide-react";
import { splineSans, splineSansMono } from "../../fonts";

export function SubTitle() {
  return (
    <div className="flex items-start gap-2 flex-wrap">
      <h2
        className={cn(
          splineSansMono.className,
          "text-[14px] font-light text-[#666666]"
        )}
      >
        Gastos dos senadores brasileiros total
        <strong className="font-bold"> por estado (UF)</strong> – CEAPS
      </h2>

      <div className="cursor-help my-auto">
        <HoverCard>
          <HoverCardTrigger>
            <InfoIcon color="#D9D9D9" size={16} />
          </HoverCardTrigger>
          <HoverCardContent className="flex gap-x-4 w-80 mt-6 ml-72 rounded-3xl p-6">
            <div className="mx-auto">
              <InfoIcon color="#D9D9D9" size={24} />
            </div>
            <div
              className={cn(
                splineSans.className,
                "text-[#7F7F7F] text-[14px] font-light"
              )}
            >
              CEAPS significa Cotas para Exercício da Atividade Parlamentar dos
              Senadores (CEAPS). São recursos financeiros destinados a cada
              senador para custear despesas relacionadas ao exercício de suas
              funções parlamentares.
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
