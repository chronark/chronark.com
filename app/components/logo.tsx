import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  weight: "600",
  subsets: ["latin"],
});

export const Logo: React.FC = () => {
  return (
    <>
      <text className={baloo.className + " text-2xl"}>Hadi Samadzad</text>
    </>
  );
};
