import type { Metadata } from "next";
import ProjectsPage from "@/components/projects/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Synexis Technologies products and developed solutions across business, energy, education, agriculture and digital marketplaces.",
};

export default function Page() {
  return <ProjectsPage />;
}
