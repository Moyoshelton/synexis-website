import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Synexis Technologies about business, technology, products, partnerships or innovation.",
};

export default function Page() {
  return <ContactPage />;
}
