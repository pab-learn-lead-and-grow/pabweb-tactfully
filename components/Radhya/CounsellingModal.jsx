"use client";

import { useState } from "react";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function CounsellingModal({ children, onSuccess }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children && (
        <span onClick={() => setOpen(true)}>
          {children}
        </span>
      )}

      {open && (
        <CounsellingForm onClose={() => setOpen(false)} onSuccess={onSuccess} />
      )}
    </>
  );
}