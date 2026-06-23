import Logo from "./Logo";
import LocationSelector from "./LocationSelector";
import SearchBar from "./SearchBar";
import UserActions from "./UserActions";

function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3">

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">

          {/* Top row */}
          <div className="flex items-center justify-between gap-2 w-full md:w-auto">

            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">

              <Logo />

              <div className="hidden sm:block h-6 w-px bg-gray-200" />

              <div className="flex-1 min-w-0">
                <LocationSelector />
              </div>

            </div>

            <div className="md:hidden flex-shrink-0">
              <UserActions />
            </div>

          </div>

          <div className="flex-1 min-w-0 w-full">
            <SearchBar />
          </div>

          <div className="hidden md:block flex-shrink-0">
            <UserActions />
          </div>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;