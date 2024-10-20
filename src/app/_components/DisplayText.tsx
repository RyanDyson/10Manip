import { Big_Shoulders_Display } from "next/font/google";

const BigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: "400",
});

interface DisplayTextProps extends React.HTMLAttributes<HTMLDivElement> {
  font?: string;
}

export function DisplayText(props: DisplayTextProps) {
  return (
    <div {...props} className={`${BigShoulders.className} ${props.className}`}>
      {props.children}
    </div>
  );
}
