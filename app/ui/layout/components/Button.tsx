import { ReactNode } from "react";
import { Button } from "../../components/button";
import { cn } from "@/app/lib/utils";

interface IconButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function IconButton({
  icon,
  children,
  className,
  ...props
}: IconButtonProps) {
  return (
    <Button
      className={cn(
        "w-[7rem] h-[5rem] flex flex-col items-center justify-center border border-[#e0dcdc] bg-white hover:border-[#7C3AED] font-normal text-[#565656]",
        className
      )}
      {...props}
    >
      {icon && <div>{icon}</div>}
      {children && <span>{children}</span>}
    </Button>
  );
}
