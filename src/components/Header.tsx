import { NavLink } from "react-router-dom";
import { changeLimit } from "../store/slices/queries";
import { useAppDispatch } from "../store/hooks";

export const Header = () => {
    const dispatch = useAppDispatch();
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
            
                  <select name="pageLimit" id="pageLimit" onChange={(e) => { dispatch(changeLimit(Number(e.target.value))); }}>
                    <option value="21" selected>21</option>
                    <option value="24">24</option>
                    <option value="27">27</option>
                    <option value="30">30</option>
                  </select>
        </header>
    );
}