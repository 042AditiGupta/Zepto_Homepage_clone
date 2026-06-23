import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import countryCodes from "../data/CountryCodes.jsx";

function CountryCodeDropdown({ selected, onSelect }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-full">

      
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="h-full flex items-center justify-between px-3 bg-transparent text-gray-800 border-r border-gray-200 gap-2 min-w-[110px]"
      >
        <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
          <span>{selected?.flag || "🇮🇳"}</span>
          <span>{selected?.iso || "IN"}</span>
          <span>{selected?.dial || "+91"}</span>
        </span>

        <IoChevronDown className="text-gray-500" size={14} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-[260px] bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto py-1">

          {countryCodes.map((country) => (
            <button
              key={country.iso}
              type="button"
              onClick={() => {
                onSelect(country);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 hover:bg-gray-50 text-left"
            >
              <span className="flex items-center gap-2 text-sm text-gray-700">
                <span>{country.name}</span>
              </span>

              <span className="text-sm text-gray-500">
                {country.dial}
              </span>
            </button>
          ))}

        </div>
      )}
    </div>
  );
}

export default CountryCodeDropdown;