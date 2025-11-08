"use client";

import { useState, useEffect } from "react";
import  Image  from "next/image";
import { createSupabaseClient } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createSupabaseClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
        router.push("/");
      }
    };
    getUser();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) router.push("/");
      }
    );
    return () => subscription.subscription.unsubscribe();
  }, [supabase, router]);

  const signInWithGoogle = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) setMessage(error.message);
    setLoading(false);
  };

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
    else {
      setMessage("Logged in successfully!");
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 sm:p-10 flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
          WELCOME
        </h2>

        {/* Phone Section */}
        <div className="w-full mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              placeholder="+91 0000000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>

        {/* OTP Input */}
        {otpSent && (
          <div className="w-full mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Verify OTP
            </label>
            <input
              type="text"
              placeholder="- - - - - -"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 focus:outline-none"
            />
          </div>
        )}

        {/* Login button */}
        <button
          onClick={otpSent ? verifyOtp : sendOtp}
          disabled={loading}
          className="w-full bg-blue-800 text-white py-2 rounded-md mt-2 hover:bg-blue-900 transition font-semibold shadow-sm"
        >
          {otpSent ? "Login now" : "Send OTP"}
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center w-full my-4">
          <span className="text-sm text-gray-500">or continue with</span>
        </div>

        {/* Google & Gmail Buttons */}
        <div className="flex items-center justify-center gap-6 mt-1">
          <button
            onClick={signInWithGoogle}
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

          <button className="flex items-center justify-center p-2 rounded-full border hover:bg-gray-100 transition">
            <Image
              src="/mail_logo.png"
              alt="Gmail"
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
