import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "My Orders", path: "/dashboard/myOrders" },
    { name: "Account", path: "/dashboard/account" },
  ]

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-emerald-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex">
                <h1 className="text-[#FF7A18] text-4xl island-moments-regular">
                  Chuks Kitchen
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-emerald-800 font-medium px-3 py-2 rounded-lg hover:text-emerald-600 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <>
              <Link
                to="/onboarding"
                className="px-6 py-2.5 bg-[#ff7a18] font-medium rounded-xl text-white  transition-all duration-300 hover:border-emerald-300 hover:shadow-md"
              >
                Login
              </Link>
            </>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 rounded-lg hover:bg-emerald-50 transition-colors duration-200"
          >
            <span
              className={`w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-emerald-700 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-110 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-emerald-100 space-y-4 bg-white rounded-2xl mt-2">
            <nav className="flex flex-col space-y-4">
              {menuLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-emerald-800 font-medium py-3 px-4 rounded-xl hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-3 pt-4 border-t border-emerald-100">
              <>
                <Link
                  to="/onboarding"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 text-emerald-700 font-medium rounded-xl bg-white border border-emerald-200 text-center hover:bg-emerald-50 transition-all duration-300"
                >
                  Login
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
