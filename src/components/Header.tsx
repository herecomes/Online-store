import { NavLink } from "react-router-dom";
import { changeSearch, changeSkip } from "../store/slices/queries";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useSearchResultsQuery } from "../services/productsApi";

export const Header = () => {
    const dispatch = useAppDispatch();
    const searchSlice = useAppSelector((state) => state.queries.search);
    const {data, isLoading, error} = useSearchResultsQuery({search: searchSlice}, {skip: searchSlice.length < 3});
    console.log(searchSlice)
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
            <input name="header-search" className="border" type="text" onChange={(e) => dispatch(changeSearch(e.target.value),changeSkip(0))} value={searchSlice}/>
            
            <div className="flex flex-col gap-3">
                {searchSlice.trim().length >= 3 && data?.products.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-sm flex flex-row">
                    <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-24 object-cover rounded"
                    />
                    <div className="flex flex-col">
                        <h2 className="font-semibold text-lg">{product.title}</h2>
                        <p className="text-green-600 font-bold">${product.price}</p>
                    </div>
                </div>
                ))}
            </div>
        </header>
    );
}