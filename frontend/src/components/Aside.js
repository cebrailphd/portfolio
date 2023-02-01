import React from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "About", to: "/about", current: false },
  { name: "Research", to: "/research", current: false },
  { name: "Photography", to: "/photography", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Aside() {
  return (
    <>
      <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
        <div className="lg:sticky lg:top-20">
          <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
            <a aria-label="Lee Robinson" href="/"></a>
          </div>
          <nav
            className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row space-y-0 space-x-2 md:flex-col md:space-x-0 md:space-y-2 pr-10 mb-2 mt-2 md:mt-0">
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
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Aside;
