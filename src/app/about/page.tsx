import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the founding philosophy behind Synexis Technologies: independent thinking, intellectual curiosity and engineering ideas into meaningful impact.",
};

export default function Page() {
  return <AboutPage />;
}
