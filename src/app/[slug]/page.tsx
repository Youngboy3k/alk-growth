"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Home from "../page";

export default function SectionPage() {
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    // Wait for the page to render, then scroll to the section
    const timer = setTimeout(() => {
      const section = document.getElementById(slug);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  return <Home />;
}
