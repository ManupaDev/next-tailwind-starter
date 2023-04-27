import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next + Tailwind Starter",
  description: "A minimalist NextJS starter project",
};

export default function Page() {
  return (
    <div className="font-sans">
      <h1 className="text-3xl font-semibold">Hello</h1>
    </div>
  );
}
