"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabaseClient";

export default function UpdatePassword() {
  const supabase = createSupabaseClient();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    if (!password) {
      setMessage("Please enter a new password");
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setMessage(error.message);
    else {
      setMessage("Password updated successfully! Redirecting...");
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
          Set New Password
        </h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:border-blue-600 focus:outline-none"
        />
        <button
          onClick={handleUpdate}
          className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition font-semibold shadow-sm"
        >
          Update Password
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
