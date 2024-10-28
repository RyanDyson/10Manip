import { DisplayText } from "../DisplayText";

export function AboutUs() {
  return (
    <div className="px-8 md:px-32 py-8 bg-neutral-950 flex flex-col gap-y-4 items-center">
      <DisplayText className="text-9xl w-full text-center">
        ABOUT US
      </DisplayText>
      <p>Just a group of friends, interested in CS</p>
    </div>
  );
}
