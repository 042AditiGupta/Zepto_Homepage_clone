import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IoChevronBack } from "react-icons/io5";

function CartHandler({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[99999] flex justify-end">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-[92vw] max-w-[420px] h-full bg-white shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-4 border-b border-gray-100 flex-shrink-0">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 transition text-gray-700"
          >
            <IoChevronBack size={22} />
          </button>
          <h2 className="font-bold text-lg text-gray-900">Cart</h2>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-3">
          <h3 className="text-xl font-bold text-gray-900">Please Login</h3>
          <p className="text-sm text-gray-500">Please login to access the cart.</p>

          <button className="mt-4 w-full max-w-[280px] bg-[#ff007a] hover:bg-[#e6006e] text-white font-bold text-sm sm:text-base py-3 rounded-xl transition-colors">
            Login
          </button>
        </div>

      </div>
    </div>,
    document.body
  );
}

export default CartHandler;