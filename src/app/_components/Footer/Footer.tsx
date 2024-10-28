import Link from "next/link";
import { BackgroundCellCore } from "./ReactiveGrid";
import { NavItems } from "../Navigation/NavItems";
import { DisplayText } from "../DisplayText";

export function Footer() {
  return (
    <div className="fixed z-0 w-screen bottom-0 right-0  p-8 flex justify-between text-neutral-900 h-[30vh] items-end">
      <BackgroundCellCore />
      <div className="relative w-screen h-full flex justify-between z-20 items-end pointer-events-none">
        <DisplayText className="text-9xl pointer-events-auto [text-shadow:_0_0_10px_rgb(255_255_255_/_80%),_0_0_20px_rgb(255_255_255_/_60%),_0_0_30px_rgb(255_255_255_/_40%),_0_0_40px_rgb(255_255_255_/_20%)]">
          &lt;10MANIP&gt;
        </DisplayText>
        <div className="flex flex-col gap-y-1 justify-end items-end pointer-events-auto">
          {NavItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className="text-left hover:text-white hover:bg-neutral-900 py-2 px-4 rounded-full transition-all duration-100 pointer-events-auto [text-shadow:_0_0_10px_rgb(255_255_255_/_80%),_0_0_20px_rgb(255_255_255_/_60%),_0_0_30px_rgb(255_255_255_/_40%),_0_0_40px_rgb(255_255_255_/_20%)] hover:[text-shadow:_0_0_0_rgb(255_255_255_/0%)]"
              >
                {item.text}
              </Link>
            );
          })}
          <p className="px-4 text-sm text-slate-500">
            @2024 all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
