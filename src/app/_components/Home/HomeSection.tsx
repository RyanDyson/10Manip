import { DisplayText } from "../DisplayText";
import coverImage from "@/../public/coverImage.jpg";
import Image from "next/image";

export function HomeSection() {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src={coverImage}
        alt={"indofest"}
        className="absolute w-screen h-screen object-cover z-0"
      />
      <div className="w-screen h-screen relative flex p-4 md:p-8 items-end justify-end z-10">
        <DisplayText className="text-9xl">&lt;10Manip&gt;</DisplayText>
      </div>
    </div>
  );
}
