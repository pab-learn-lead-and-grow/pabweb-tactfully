"use client";

import { useState } from "react";
import CounsellingForm from "@/components/Radhya/CounsellingForm";

export default function CounsellingModal({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <span onClick={() => setOpen(true)}>
        {children}
      </span>

      {/* Modal */}
      {open && (
        <CounsellingForm onClose={() => setOpen(false)} />
      )}
    </>
  );
}