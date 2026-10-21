import { NavLink } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <nav>
                <NavLink to="/" className={
                    ({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`
                }>
                    Home
                </NavLink>
                <NavLink to="/catalog" className={
                    ({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`
                }>
                    Catalog
                </NavLink>
            </nav>
        </header>
    );
}