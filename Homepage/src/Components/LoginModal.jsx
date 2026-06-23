import React, { useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

import zeptoLogo from "../assets/zepto-logo-white.png";
import getAppImg from "../assets/get-the-app-phone.webp";
import playStore from "../assets/download-play-store.svg";
import appStore from "../assets/download-app-store.svg";

import CountryCodeDropdown from "./countryCodeDropdown.jsx";
import countryCodes from "../data/CountryCodes.jsx";

// Safe fallback
const defaultCountry =
  countryCodes.find((c) => c.iso === "IN") || countryCodes[0];

function LoginModal({ open, onClose }) {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(defaultCountry);

  if (!open) return null;

  const isValidPhone = phone.replace(/\D/g, "").length === 10;

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-[1px]">

      <div className="relative w-full max-w-[420px] sm:max-w-[760px] md:max-w-[880px] h-auto sm:h-[640px] bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row animate-in fade-in zoom-in-95 duration-150">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-1.5 rounded-full bg-white/90 hover:bg-gray-100 transition text-gray-800 shadow-sm"
        >
          <IoClose size={20} />
        </button>

        {/* LEFT SECTION */}
        <div className="w-full sm:w-1/2 bg-gradient-to-br from-[#7b2ff7] via-[#a02fd6] to-[#c026a3] flex flex-col justify-center px-6 sm:px-8 md:px-10 py-10 gap-6 sm:gap-8">

          <img
            src={zeptoLogo}
            alt="Zepto Logo"
            className="h-8 sm:h-9 w-auto object-contain"
          />

          <h2 className="text-white font-bold text-2xl sm:text-3xl leading-snug">
            Everyday Low Prices
            <br />
            in minutes
          </h2>

          {/* PHONE INPUT WRAPPER */}
          <div className="flex flex-col gap-4">

            <div className="flex items-center w-full h-12 sm:h-[52px] bg-white rounded-xl relative z-20">

              {/* COUNTRY DROPDOWN */}
              <CountryCodeDropdown
                selected={country}
                onSelect={(selectedCountry) => {
                  setCountry(selectedCountry); // updates state properly
                }}
              />

              {/* PHONE INPUT */}
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value.replace(/\D/g, ""))
                }
                placeholder="Enter Phone Number"
                className="flex-1 h-full px-3 text-sm outline-none text-gray-800 placeholder:text-gray-400 min-w-0 rounded-r-xl"
              />
            </div>

            {/* CONTINUE BUTTON */}
            <button
              disabled={!isValidPhone}
              className="w-full h-12 sm:h-[52px] rounded-xl font-semibold text-white text-base bg-gradient-to-r from-[#ff4d8d] to-[#ff007a] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Continue
            </button>

          </div>

          <p className="text-xs sm:text-[13px] text-white/80 text-center leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="#" className="text-white font-semibold underline">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-white font-semibold underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden sm:flex w-1/2 flex-col items-center justify-center gap-6 px-8 py-10 bg-white">

          <img
            src={getAppImg}
            alt="Get Zepto App"
            className="w-40 sm:w-44 h-auto object-contain"
          />

          <div className="flex flex-col items-center gap-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center leading-snug">
              Order faster & easier everytime
            </h3>
            <p className="text-sm text-gray-500">with the Zepto App</p>
          </div>

          <div className="flex flex-col items-center gap-3 mt-2">
            <a href="#">
              <img
                src={playStore}
                alt="Google Play"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>

            <a href="#">
              <img
                src={appStore}
                alt="App Store"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </a>
          </div>

        </div>

      </div>
    </div>,
    document.body
  );
}

export default LoginModal;