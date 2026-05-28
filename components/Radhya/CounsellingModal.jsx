"use client";

import { useEffect, useState } from "react";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function CounsellingModal({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      {children && (
        <span onClick={() => setOpen(true)}>
          {children}
        </span>
      )}

      {/* Modal */}
      {open && (
        <CounsellingForm onClose={() => setOpen(false)} />
      )}
    </>
  );
}