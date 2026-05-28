"use client";

import { useEffect, useState } from "react";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function AutoPopupModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return open ? <CounsellingForm onClose={() => setOpen(false)} /> : null;
}
