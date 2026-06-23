import zeptologo from "../../assets/zeptologo.svg";

function Logo() {
  return (
    <img
      src={zeptologo}
      alt="Zepto Logo"
      className="h-7 sm:h-9 md:h-10 w-auto object-contain shrink-0"
    />
  );
}

export default Logo;