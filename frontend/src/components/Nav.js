import React from "react";
import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", to: "/about", current: true },
  { name: "Research", to: "/research", current: false },
  { name: "Photography", to: "/photography", current: false },
  { name: "Contact", to: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-6">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive
                            ? classNames("text-cyan-300")
                            : classNames(
                                "transition hover:text-cyan-300 hover:duration-300"
                              )
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => close()}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// function Nav() {
//   // This styling will be applied to a <NavLink> when the
//   // route that it links to is currently selected.
//   let activeStyle = {
//     textDecoration: "none",
//   };

//   let activeClassName = "none";

//   return (
//     <nav className="px-4 py-3 bg-gray-800">
//       <div className="flex justify-between items-center">
//         <Link className="text-white" to="/">
//           cebrail
//         </Link>
//         <div>
//           <div className="flex">
//             <div className="hidden md:flex gap-2">
//               <NavLink
//                 className="text-white"
//                 to="/"
//                 style={({ isActive }) => (isActive ? activeStyle : undefined)}
//               >
//                 home
//               </NavLink>
//               <NavLink
//                 className="text-white"
//                 to="/about"
//                 style={({ isActive }) => (isActive ? activeStyle : undefined)}
//               >
//                 about
//               </NavLink>
//               <NavLink
//                 className="text-white"
//                 to="/research"
//                 style={({ isActive }) => (isActive ? activeStyle : undefined)}
//               >
//                 research
//               </NavLink>
//               <NavLink
//                 className="text-white"
//                 to="/photography"
//                 style={({ isActive }) => (isActive ? activeStyle : undefined)}
//               >
//                 photography
//               </NavLink>
//             </div>
//             <div className="flex md:hidden">
//               <button
//                 data-mobile-menu
//                 className="text-gray-400 px-3 py-2 hover:text-white block"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="icon icon-tabler icon-tabler-menu-2"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   fill="none"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                   <line x1="4" y1="6" x2="20" y2="6"></line>
//                   <line x1="4" y1="12" x2="20" y2="12"></line>
//                   <line x1="4" y1="18" x2="20" y2="18"></line>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="block md:hidden" id="modible-menu">
//         <div className="flex flex-col">
//           <NavLink
//             className="text-white block"
//             to="/"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             home
//           </NavLink>
//           <NavLink
//             className="text-white block"
//             to="/about"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             about
//           </NavLink>
//           <NavLink
//             className="text-white block"
//             to="/research"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             research
//           </NavLink>
//           <NavLink
//             className="text-white block"
//             to="/photography"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             photography
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
