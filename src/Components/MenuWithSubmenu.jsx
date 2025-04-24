import { Link } from "react-router-dom";

export default function MenuWithSubMenu({
  title,
  list,
  index,
  openIndex,
  handleToggle,
  isLargeScreen,
}) {
  // Force the MEDIA submenu open on large screens.
  const alwaysOpen = isLargeScreen && title === "Media";
  const isOpen = alwaysOpen ? true : openIndex === index;
  return (
    <li className={title !== "Media" ? "lg:hidden" : ""}>
      <details
        open={isOpen}
        onToggle={(e) => {
          // If it's the MEDIA submenu on a large screen, ensure it stays open.
          if (alwaysOpen && !e.target.open) {
            e.target.open = true;
          }
        }}
        className="group [&_summary::-webkit-details-marker]:hidden "
      >
        <summary
          onClick={(e) => {
            // Prevent toggling on MEDIA submenu if on a large screen.
            if (alwaysOpen) {
              e.preventDefault();
            } else {
              e.preventDefault();
              handleToggle(index);
            }
          }}
          className={`${
            alwaysOpen ? "cursor-default" : "cursor-pointer"
          } flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 `}
        >
          <span className="text-sm font-medium">{title}</span>
          <span
            className={`shrink-0 transition duration-300 ${
              isOpen ? "-rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        {/* Scrollable submenu */}
        <ul
          className={`mt-2 space-y-1 px-4 transition-all duration-300 ${
            isOpen ? "max-h-40 overflow-y-auto" : "max-h-0 overflow-hidden"
          } scrollbar-hide`}
        >
          {list.map((cur, i) => {
            let val = "";
              let href = "";
              if(title === "Builder"){
                val = cur.builderName
                href = "/builder/"+cur.builderName.replace(/\s+/g, "").toLowerCase()
                }
                else if(title === "Projects"){
                val = cur.projectType
                href = "/projects/"+cur.projectType.replace(/\s+/g, "").toLowerCase()
                }else if(title === "City"){
                val = cur.name
                href = "/city/"+cur.name.replace(/\s+/g, "").toLowerCase()
                }
            return (
              <li key={i}>
                <Link
                  to={href}
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  {val}
                </Link>
              </li>
            );
          })}
        </ul>
      </details>
    </li>
  );
}
