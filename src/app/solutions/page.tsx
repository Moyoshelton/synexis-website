import type { Metadata } from "next";
import SolutionsPage from "@/components/solutions/SolutionsPage";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore proprietary software platforms and products being developed by Synexis Technologies.",
};

export default function Page() {
  return <SolutionsPage />;
}
