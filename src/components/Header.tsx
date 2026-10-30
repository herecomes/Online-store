import { NavLink } from "react-router-dom";
import { changeSearch, changeSkip } from "../store/slices/queries";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Header = () => {
    const dispatch = useAppDispatch();
    const searchSlice = useAppSelector((state) => state.queries.search);
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
            <input className="border" type="text" onChange={(e) => dispatch(changeSearch(e.target.value),changeSkip(0))} value={searchSlice}/>
        </header>
    );
}