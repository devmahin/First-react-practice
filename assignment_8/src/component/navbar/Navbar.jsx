import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="">
      <div className="navbar p-0 justify-between items-center bg-base-100">
        <div className="">
          <a className="font-semibold text-2xl lg:text-3xl">Recipe Calories</a>
        </div>

        <div className="hidden lg:flex gap-x-10 ">
          <a
            href=""
            className="no-underline text-gray-500 space-x-2 tracking-wider "
          >
            Home
          </a>
          <a
            href=""
            className="no-underline text-gray-500 space-x-2 tracking-wider "
          >
            Recipes
          </a>
          <a
            href=""
            className="no-underline text-gray-500 space-x-2 tracking-wider "
          >
            About
          </a>
          <a
            href=""
            className="no-underline text-gray-500 space-x-2 tracking-wider "
          >
            Search
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className=" border-solid hidden md:flex items-center p-2 gap-x-3 border border-gray-600 rounded-lg ">
              <CiSearch className="text-xl"></CiSearch>

            <input
              type="text"
              placeholder="Search"
              className=" border-none outline-none text-xl"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

