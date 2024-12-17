// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   // State to toggle the dropdown menu
//   const [isOpen, setIsOpen] = useState(false);

//   // Function to toggle dropdown visibility
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <>
//       <nav className="bg-blue-400 border-gray-200">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-3 p-0">
//           {/* Logo Section */}
//           <div className="LogoSection">
//             <Link
//               to="/"
//               className="Homepage flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img
//                 src="/src/assets/KSO ikan.png"
//                 className="Logo w-32 h-16 md:w-44 md:h-28 md:ml-8"
//                 alt="KSO-Logo"
//               />
//             </Link>
//           </div>

//           {/* Dropdown Button */}
//           <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               onClick={toggleDropdown} // Toggle dropdown on button click
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Dropdown Menu */}
//           <div
//             className={`${
//               isOpen ? "block" : "hidden"
//             } items-center justify-between w-full md:flex md:w-auto md:order-1 pb-4 animate-fade-down`}
//           >
//             <ul className="flex flex-col border-none text-base font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
//               <li>
//                 <Link
//                   to="/"
//                   className="block py-2 px-3 text-white hover:bg-blue-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Tentang-Kami"
//                   className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Tentang Kami
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Produk-Kami"
//                   className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Produk
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Kegiatan"
//                   className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Kegiatan
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/Kontak"
//                   className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Kontak
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // State to toggle the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Ref for the dropdown menu
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-blue-400 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-3 p-0">
          {/* Logo Section */}
          <div className="LogoSection">
            <Link
              to="/"
              className="Homepage flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/src/assets/KSO ikan.png"
                className="Logo w-32 h-16 md:w-44 md:h-28 md:ml-8"
                alt="KSO-Logo"
              />
            </Link>
          </div>

          {/* Dropdown Button */}
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              ref={buttonRef} // Attach ref to button
              onClick={toggleDropdown} // Toggle dropdown visibility
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          <div
            ref={dropdownRef} // Attach ref to the dropdown menu
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1 pb-4 animate-fade-down`}
          >
            <ul className="flex flex-col border-none text-base font-medium p-4 md:text-lg md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row  md:border-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white hover:bg-blue-700 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Tentang-Kami"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/Produk-Kami"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  to="/Kegiatan"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Kegiatan
                </Link>
              </li>
              <li>
                <Link
                  to="/Kontak"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
