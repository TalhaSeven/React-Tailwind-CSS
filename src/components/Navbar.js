import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../Redux/Features/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { username, password } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearUser());
  };
  return (
    <>
      <nav className="bg-[#FBFBFB] shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 ">
        <div>
          <div
            className="flex p-6"
          >
            <Link
              className="ml-2 mr-5 flex text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              to="/"
            >
              <img
                src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png"
                style={{ height: 20 }}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
            <ul
              className="flex"
            >
              <li>
                <Link
                  className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 px-4 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 px-4 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  to="/card"
                >
                  Card
                </Link>
              </li>
              {username && password ? (
                <li>
                  <Link
                    onClick={handleClear}
                    className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 px-4 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    to="/login"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-white transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 px-4 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
