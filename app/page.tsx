import svgTitle from "@/public/vector.svg";
import Image from "next/image";
import { splineSansMono, splineSans } from "@/app/ui/fonts";
import { cn } from "./lib/utils";
import { InfoIcon } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/components/hoverCard";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 items-center">
        {/* COMPONENTE ICON*/}
        <Image
          src={svgTitle}
          alt="Imagem de um politico"
          width={58}
          height={70}
        />
        <div className="flex flex-col w-full">
          {/* COMPONENTE TITLE*/}
          <h1
            className={cn(
              splineSansMono.className,
              "font-bold text-[30px] text-[#28262A]"
            )}
          >
            Gastos dos Senadores Brasileiros
          </h1>
          <h2
            className={cn(
              splineSansMono.className,
              "text-[14px] font-light text-[#666666]"
            )}
          >
            Gastos dos senadores brasileiros total
            <b className="font-bold"> por estado (UF)</b> -{" "}
            <span className="inline-flex items-center gap-4">
              CEAPS
              <div className="cursor-help">
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
                      CEAPS significa Cotas para Exercício da Atividade
                      Parlamentar dos Senadores (CEAPS) são recursos financeiros
                      destinados a cada senador para custear despesas
                      relacionadas ao exercício de suas funções parlamentares.
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}
