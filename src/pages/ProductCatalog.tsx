import { useGetProductsQuery } from '../services/productsApi';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeLimit, changeOrder, changeSkip, changeSortBy, changePage } from '../store/slices/queries';

const ProductCatalog = () => {
  
  const limitSlice = useAppSelector((state) => state.queries.limit);
  const skipSlice = useAppSelector((state) => state.queries.skip);
  const sortBySlice = useAppSelector((state) => state.queries.sortBy);
  const orderSlice = useAppSelector((state) => state.queries.order);
  const searchSlice = useAppSelector((state) => state.queries.search);
  const pageSlice = useAppSelector((state) => state.queries.page);

  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useGetProductsQuery({ skip: skipSlice, limit: limitSlice, sortBy: sortBySlice, order: orderSlice, search: searchSlice});

  if (isLoading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Failed to load products.</div>;
  }

  const overalProducts = data?.total ? data?.total : 0;
  const totalPages = Math.ceil(overalProducts / limitSlice);
  console.log(overalProducts);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <select name="pageLimit" id="pageLimit" onChange={(e) => { dispatch(changeLimit(Number(e.target.value))); dispatch(changePage(1)); }}>
        <option value="21" selected>21</option>
        <option value="24">24</option>
        <option value="27">27</option>
        <option value="30">30</option>
      </select>
      <select name="sort" id="sort" onChange={(e) => dispatch(changeSortBy((e.target.value)))}>
        <option value="id" selected>id</option>
        <option value="title">title</option>
        <option value="price">price</option>
      </select>
      <button onClick={() => orderSlice === "asc" ? dispatch(changeOrder("desc")) : dispatch(changeOrder("asc"))}>Order by: <span>{orderSlice}</span></button>
      <div className="pagination">
        <nav aria-label="Product pages">
          {
            Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button onClick={() => dispatch(changePage(page))} key={"page" + page} className={`px-3 py-2 rounded-md text-sm font-medium ${pageSlice === page ? 'active' : ''}`}>{page}</button>);
            })
          }
        </nav>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-6">
        {data?.products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;