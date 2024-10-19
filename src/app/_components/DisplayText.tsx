import { Handjet } from "next/font/google";

const HandjetFont = Handjet({
  subsets: ["latin"],
  weight: "400",
});

interface DisplayTextProps extends React.HTMLAttributes<HTMLDivElement> {
  font?: string;
}

export function DisplayText(props: DisplayTextProps) {
  return (
    <div {...props} className={`${HandjetFont.className} ${props.className}`}>
      {props.children}
    </div>
  );
}
