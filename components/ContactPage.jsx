"use client";
import Image from "next/image";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Top Header Section */}
      <div
        className="w-full h-[250px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/contactpab.png')",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
          Contact us
        </h1>
      </div>

      {/* Contact Content Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Info Section */}
        <div className="flex flex-col bg-white justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black">
            You Will Grow, You Will Succeed.
            <br /> We Promise That
          </h2>
          <p className="text-black font-medium">PAB Learn Lead and Grow</p>

          {/* Info Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {/* Call */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600 w-6 h-6" />
                <p className="font-semibold text-black">Call for inquiry</p>
              </div>
              <span className="text-black">+91 9999999999</span>
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 w-6 h-6" />
                <p className="font-semibold text-black">Send us email</p>
              </div>
              <span className="text-black">info@pab.com</span>
            </div>

            {/* Hours */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="text-blue-600 w-6 h-6" />
                <p className="font-semibold text-black">Opening hours</p>
              </div>
              <span className="text-black">Mon - Sat: 10AM - 10PM</span>
            </div>

            {/* Office */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600 w-6 h-6" />
                <p className="font-semibold text-black">Office</p>
              </div>
              <span className="text-black">Indore, MP</span>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div
          className="bg-blue-50 p-8 rounded-2xl shadow-md"
          style={{
            backgroundColor: "rgba(6, 78, 146, 0.1)",
          }}
        >
          <h3 className="text-2xl font-semibold text-center text-black mb-1">
            Contact Info
          </h3>
          <p className="text-black text-center mb-6">Send us a message</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-black font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-black font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your E-mail address"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black bg-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[400px] p-[50px] bg-white">
        <iframe
          title="PAB Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0859417925176!2d75.89152967349607!3d22.725046827369216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd35df0f5b3d%3A0x77dd968e66ca42f2!2sRafael%20Tower%2C%20Greater%20Kailash%20Road%2C%20Old%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452018!5e0!3m2!1sen!2sin!4v1762260085393!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl border border-gray-200"
        ></iframe>
      </div>
    </div>
  );
}
