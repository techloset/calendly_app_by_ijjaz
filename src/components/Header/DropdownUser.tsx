import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { arrowDown } from "../../../public/images";
import LogoutBtn from "../button/LogoutBtn";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1"
        href="#"
      >
        <span className="h-33 w-33 rounded-full">
          <Image
            width={33}
            height={33}
            src={"/images/user/user.jpg"}
            alt="User"
            className="rounded-full"
          />
        </span>

        <Image
          width={16}
          height={16}
          src={arrowDown}
          alt="User"
        />
      </Link>
      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col  rounded-sm border border-stroke bg-white-default shadow-default ${dropdownOpen === true ? "block" : "hidden"
          }`}
      >
        <ul className="flex flex-col  border-b border-stroke px-8 py-7.5 ">
          <li>
            <Link
              href="/profile"
              className="flex items-center   py-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center   py-2 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              Settings
            </Link>
          </li>
        </ul>
        <LogoutBtn />
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
