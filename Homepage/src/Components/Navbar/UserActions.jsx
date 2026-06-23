import { useState } from "react";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import CartHandler from "./CartHandler";
import LoginModal from "../LoginModal";

function UserActions() {
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">

        <button
          onClick={() => setLoginOpen(true)}
          className="flex flex-col items-center min-w-[38px]"
        >
          <IoPersonOutline className="text-[20px] sm:text-[24px]" />
          <span className="text-[11px] sm:text-sm font-semibold">Login</span>
        </button>

        <button
          onClick={() => setCartOpen(true)}
          className="flex flex-col items-center min-w-[38px]"
        >
          <IoCartOutline className="text-[20px] sm:text-[24px]" />
          <span className="text-[11px] sm:text-sm font-semibold">Cart</span>
        </button>

      </div>

      <CartHandler open={cartOpen} onClose={() => setCartOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default UserActions;
