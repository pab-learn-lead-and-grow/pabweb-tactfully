"use client";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import CounsellingForm from "./CounsellingForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav className="w-full h-[75px] bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/pablogo.png" alt="PAB Logo" width={130} height={80} priority />
          </div>

          {/* Menu Links */}
          <div className={`hidden md:flex items-center space-x-5 text-gray-800 text-sm font-medium`}>
            <button className="flex items-center space-x-1 hover:text-blue-900 font-bold">
              <span>For working professionals</span>
              <ChevronDown size={14} />
            </button>
            <a href="#" className="hover:text-blue-900 font-bold">About us</a>
            <a href="#" className="hover:text-blue-900 font-bold">Blogs</a>
            <button className="flex items-center space-x-1 hover:text-blue-900 font-bold">
              <span>More</span>
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-2">
            <div className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={24} className="text-gray-800 cursor-pointer" />
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="border border-blue-900 text-blue-900 rounded-md px-3 py-1.5 hover:bg-blue-50 text-sm"
            >
              Counselling
            </button>
            <button className="bg-blue-900 text-white rounded-md px-4 py-1.5 hover:bg-blue-800 text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-gray-800 hover:text-blue-900">About us</a>
            <a href="#" className="text-gray-800 hover:text-blue-900">Blogs</a>
            <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-900">
              <span>For working professionals</span>
              <ChevronDown size={14} />
            </button>
            <button className="flex items-center space-x-1 text-gray-800 hover:text-blue-900">
              <span>More</span>
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Counselling Form Modal */}
      {showForm && <CounsellingForm onClose={() => setShowForm(false)} />}
    </>
  );
}
