import { useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';

const ProductCatalog = () => {
  const [limit, setLimit] = useState(21);
  const [currPage, setCurrPage] = useState(1);
  const { data, isLoading, error } = useGetProductsQuery({ skip: currPage == 1 ? 0 : limit * (currPage - 1), limit: limit });

  if (isLoading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Failed to load products.</div>;
  }

  const overalProducts = data?.total ? data?.total : 0;
  const totalPages = Math.ceil(overalProducts / limit);
  console.log(overalProducts);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <select name="pageLimit" id="pageLimit" onChange={(e) => { setLimit(Number(e.target.value)); setCurrPage(1); }}>
        <option value="21" selected>21</option>
        <option value="24">24</option>
        <option value="27">27</option>
        <option value="30">30</option>
      </select>
      <div className="pagination">
        <nav aria-label="Product pages">
          {
            Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button onClick={() => setCurrPage(page)} key={"page" + page} className={`px-3 py-2 rounded-md text-sm font-medium ${currPage === page ? 'active' : ''}`}>{page}</button>);
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