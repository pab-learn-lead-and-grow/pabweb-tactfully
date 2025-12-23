"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createSupabaseClient } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();

  const [mode, setMode] = useState("email"); // "email" or "phone"

  // Common states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Email login states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Phone login states
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) router.push("/");
    };
    getUser();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) router.push("/");
      }
    );

    return () => subscription.subscription.unsubscribe();
  }, [supabase, router]);

  const handleClose = () => {
    router.push("/");
  };

  // ---------------- EMAIL FUNCTIONS ----------------
  const signUpWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setMessage(error.message);
    else setMessage("Signup successful! Please verify your email.");
    setLoading(false);
  };

  const signInWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage("Logged in successfully!");
    setLoading(false);
  };

  const forgotPassword = async () => {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    if (error) setMessage(error.message);
    else setMessage("Password reset link sent to your email.");
    setLoading(false);
  };

  // ---------------- PHONE FUNCTIONS ----------------
  const sendOtp = async () => {
    if (!phone.startsWith("+")) {
      setMessage("Phone number must include country code (e.g. +91)");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) setMessage(error.message);
    else {
      setOtpSent(true);
      setMessage("OTP sent! Check your phone.");
    }
    setLoading(false);
  };

  const verifyOtp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: "sms",
    });
    if (error) setMessage(error.message);
    else router.push("/");
    setLoading(false);
  };

  // ---------------- UI ----------------
  return (
    <div
      className="min-h-screen mt-10 flex items-center justify-center bg-gray-50 p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col items-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome to PAB
        </h2>

        {/* Toggle Tabs */}
        <div className="flex w-full mb-6 bg-gray-100 rounded-md overflow-hidden">
          <button
            className={`w-1/2 py-2 font-semibold transition ${
              mode === "email"
                ? "bg-blue-900 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setMode("email")}
          >
            Email Login
          </button>
          <button
            className={`w-1/2 py-2 font-semibold transition ${
              mode === "phone"
                ? "bg-blue-900 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setMode("phone")}
          >
            Phone Login
          </button>
        </div>

        {/* EMAIL LOGIN SECTION */}
        {mode === "email" && (
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <button
              onClick={signInWithEmail}
              disabled={loading}
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition font-semibold shadow-sm"
            >
              Login
            </button>

            <button
              onClick={signUpWithEmail}
              disabled={loading}
              className="w-full bg-gray-200 text-gray-800 py-2 rounded-md mt-2 hover:bg-gray-300 transition font-semibold"
            >
              Sign Up
            </button>

            <button
              onClick={forgotPassword}
              disabled={loading}
              className="w-full text-blue-700 text-sm mt-3 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* PHONE LOGIN SECTION */}
        {mode === "phone" && (
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="+91 0000000000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 focus:outline-none"
              />
            </div>

            {otpSent && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter OTP
                </label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 focus:outline-none"
                />
              </div>
            )}

            <button
              onClick={otpSent ? verifyOtp : sendOtp}
              disabled={loading}
              className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-900 transition font-semibold shadow-sm"
            >
              {otpSent ? "Verify & Login" : "Send OTP"}
            </button>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center justify-center w-full my-4">
          <span className="text-sm text-gray-500">or continue with</span>
        </div>

        {/* Google & Gmail Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => supabase.auth.signInWithOAuth({ provider: "google" })}
            className="flex items-center justify-center p-2 rounded-full border hover:bg-gray-100 transition"
          >
            <Image
              src="/google_logo.png"
              alt="Google"
              width={28}
              height={28}
              className="object-contain"
            />
          </button>
        </div>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
