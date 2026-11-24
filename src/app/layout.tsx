import type { Metadata } from "next";
import RouteScrollManager from "@/components/layout/RouteScrollManager";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Synexis Technologies | Beyond the Expected",
    template: "%s | Synexis Technologies",
  },
  description:
    "Synexis Technologies engineers intelligent digital solutions, business systems and software that help organisations move forward.",
  applicationName: "Synexis Technologies",
  keywords: [
    "Synexis Technologies",
    "software engineering",
    "digital transformation",
    "business systems",
    "Zimbabwe technology",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <RouteScrollManager />
        {children}
      </body>
    </html>
  );
}
