"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className={!isAdmin ? "pt-[calc(2.5rem+4rem)]" : ""}>
        {children}
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <ChatWidget />}
    </>
  );
}
