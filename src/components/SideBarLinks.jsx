export default function SidebarLinks() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <a
          href="https://flowbite.com/"
          className="flex items-center ps-2.5 mb-5"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 me-3 sm:h-7"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <ul className="space-y-2 font-medium">
          {/* Add more list items as needed */}
          {/* Example list item */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                {/* Add path data for the icon */}
              </svg>
              <span className="ms-3">List Item</span>
            </a>
          </li>
          {/* Add more list items as needed */}
        </ul>
      </div>
    </aside>
  );
}
