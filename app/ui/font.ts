import { Black_Han_Sans, Do_Hyeon, Noto_Sans, Sunflower } from "next/font/google";
import { Roboto } from "next/font/google";

export const sans = Noto_Sans({ subsets: ["latin"], weight: "500" });

export const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const blackhansans = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const dohyun = Do_Hyeon({ subsets: ["latin"], weight: "400" });
