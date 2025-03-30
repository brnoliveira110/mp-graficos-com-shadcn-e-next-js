import Image from "next/image";
import svgTitle from "@/public/vector.svg";

export function TitleIcon() {
  return (
    <Image src={svgTitle} alt="Imagem de um politico" width={58} height={70} />
  );
}
