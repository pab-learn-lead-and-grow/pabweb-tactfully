"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToHome() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}