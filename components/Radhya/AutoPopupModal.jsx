"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function AutoPopupModal() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]); // runs on every route change

  return open ? (
    <CounsellingForm onClose={() => setOpen(false)} cta_name="Auto Popup" />
  ) : null;
}