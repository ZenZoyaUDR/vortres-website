import { Metadata } from "next";
import "../styles/Global.css";

export const metadata: Metadata = {
  title: "Vortres | Home",
  description: "Vortres is a Minecraft server with fun and uniqe gamemode.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
