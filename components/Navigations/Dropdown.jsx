import Link from "next/link";
import { useRouter } from "next/router";

const Dropdown = ({ index, isActive, onClick, subItem, title, icon }) => {
  const router = useRouter();
  const handleDropdownClick = () => {
    onClick(index);
  };

  return (
    <div
      className={`relative flex flex-col group w-full transition-all ease-in-out duration-300`}
    >
      <button
        className={`relative flex items-center gap-2 p-2 w-full shadow-2xl rounded-lg z-10 group-hover:bg-primary group-hover:shadow-2xl group-hover:shadow-primary group-hover:text-white group-hover:scale-105 duration-200 ease-in-out ${
          isActive
            ? `bg-primary shadow-primary text-white`
            : `bg-white dark:bg-slate-800`
        } `}
        onClick={handleDropdownClick}
      >
        <div className="w-8 h-8 rounded-md flex items-center justify-center group-hover:shadow-xl">
          <i className={icon}></i>
        </div>
        {title}
        {subItem && (
          <i
            className={`${
              isActive ? `fi-rr-angle-small-up` : `fi-rr-angle-small-down`
            } ml-auto`}
          ></i>
        )}
      </button>

      <ul
        className={`px-2 text-left flex flex-col overflow-hidden w-full transition-all ease-in-out duration-400 ${
          isActive ? `h-full` : `h-0`
        }`}
      >
        {subItem &&
          subItem.map((item) => (
            <Link
              className={`last:rounded-b-lg  hover:bg-primary hover:text-white hover:pl-4 p-2 duration-200 ease-in-out ${
                item.link === router.pathname
                  ? `bg-primary text-white`
                  : `bg-white dark:bg-slate-800`
              }`}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
