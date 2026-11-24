import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the technology capabilities of Synexis Technologies across software, artificial intelligence, cloud infrastructure, engineering and innovation.",
};

export default function Page() {
  return <ServicesPage />;
}
