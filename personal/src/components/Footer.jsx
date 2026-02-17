export default function Footer() {
  return (
    <footer className="bg-[#62412c] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="max-:col-span-2">
            <div className="flex items-center mb-6">
              <h1 className="text-[#FF7A18] text-4xl island-moments-regular">
                Chuks Kitchen
              </h1>
            </div>
            <p className="leading-relaxed text-lg max-w-lg">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Explore", path: "/explore" },
                { name: "My Orders", path: "/dashboard/myOrders" },
                { name: "Account", path: "/dashboard/account" },
                { name: "Contact", path: "/dashboard/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className=" hover:text-white transition-all duration-300 flex items-center group"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white  inline-block">
              Services
            </h3>
            <ul className="space-y-4">
              {[
                { name: "+234082345678", path: "/dashboard/cooperative" },
                { name: "hello@gmail.com", path: "mailto:hello@gmail.com" },
                { name: "123 street lagos, Nigeria", path: "/" },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.path}
                    className=" hover:text-white transition-all duration-300 flex items-center group"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* other */}
          <div>
            <ul className="space-y-4">
              {[
                { name: "Twitter", path: "/dashboard/cooperative" },
                { name: "Facebook", path: "/dashboard/analytics" },
                { name: "LinkedIn", path: "/dashboard/predictions" },
                { name: "Instagram", path: "/" },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.path}
                    className=" hover:text-white transition-all duration-300 flex items-center group"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className=" text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
