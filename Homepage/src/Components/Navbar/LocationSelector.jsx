import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { BiSearch, BiTargetLock } from "react-icons/bi";
import locationBg from "../../assets/LocationPermission.png";

function LocationSelector() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          if (!response.ok) throw new Error("Network error");
          const data = await response.json();
          
          // Debugging log so you can see exactly what OpenStreetMap sees in your console
          console.log("Full Geolocation Data Payload:", data);

          const address = data?.address;

          // Robust cascading check matching Zepto's precise header naming behavior
          const localizedName =
            address?.suburb || 
            address?.neighbourhood || 
            address?.road || 
            address?.city_district || 
            address?.town ||
            address?.city || 
            address?.state || 
            "Location Detected";

          setSelectedLocation(localizedName);
          setOpen(false);
        } catch (error) {
          console.error(error);
          alert("Unable to fetch address details. Please check your network connectivity.");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert("Location access denied. Please check your browser permission settings.");
      }
    );
  };

  return (
    <>
      <button
  onClick={() => setOpen(true)}
  className="text-left leading-tight hover:opacity-80 transition-opacity block min-w-0 flex-1"
>
  <div className="font-bold text-sm sm:text-base text-gray-900 whitespace-nowrap">⚡ 10 minutes</div>
  <div className="text-xs sm:text-sm font-semibold text-gray-600 truncate max-w-[90px] sm:max-w-[140px] md:max-w-[180px]">
    {selectedLocation} <span className="text-gray-400 font-normal">›</span>
  </div>
</button>

      {open &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[1px]">
            <div className="bg-white w-full max-w-[440px] h-[540px] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in fade-in zoom-in-95 duration-150">
              
              <div className="w-full flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
                <h2 className="font-bold text-base text-gray-900">Your Location</h2>
                <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-500">
                  <IoClose size={20} />
                </button>
              </div>

              <div className="w-full flex-1 flex flex-col px-5 pt-4 overflow-y-auto">
                <div className="flex flex-col gap-3 flex-shrink-0 w-full">
                  <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3.5 h-12 bg-gray-50/50">
                    <BiSearch className="text-gray-400 text-xl shrink-0" />
                    <input type="text" placeholder="Search a new address" className="w-full bg-transparent outline-none text-sm text-gray-800" />
                  </div>

                  <button
                    onClick={handleCurrentLocation}
                    disabled={loading}
                    className="w-full flex items-center gap-3 border border-pink-100 bg-pink-50/40 text-[#ff007a] rounded-xl h-12 px-3.5 hover:bg-pink-50 transition"
                  >
                    <BiTargetLock className="text-xl shrink-0" />
                    <span className="text-sm font-semibold">{loading ? "Locating..." : "Use My Current Location"}</span>
                  </button>
                </div>

                <div className="flex-1 min-h-[20px]" />

                <div className="w-full flex flex-col items-center justify-end pb-6 mt-auto flex-shrink-0">
                  <div className="w-full h-36 flex items-center justify-center overflow-hidden px-4">
                    <img src={locationBg} alt="Map Pin graphic" className="h-full w-auto object-contain" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-medium mt-3 text-center">
                    Enable location for better delivery experience
                  </p>
                </div>
              </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default LocationSelector;