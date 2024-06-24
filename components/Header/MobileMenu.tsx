import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const MobileMenu = ({ menu, active, toggleMenu }: any) => {
  const pathName = usePathname();
  return (
    <Sheet open={active} onOpenChange={toggleMenu}>
      <SheetContent side="left" className="p-0">
        <SheetHeader>
          <SheetTitle className="text-2xl text-primary text-left uppercase pt-3 pb-2 pl-5">
            Skilline
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="px-3">
          <div className="flex flex-col justify-start items-start divide-slate-100 divide-y-2">
            {menu.map((item: any, index: number) => {
              return (
                <Link
                  href={item.link}
                  className={cn(
                    " hover:text-primary px-2 w-full text-left py-3",
                    pathName === item.link ? "text-primary" : ""
                  )}
                  key={index}
                  onClick={() => toggleMenu(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </SheetDescription>{" "}
      </SheetContent>
    </Sheet>
  );
};
