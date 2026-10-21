import { useState } from 'react';
import { useGetProductsQuery } from '../services/productsApi';

const ProductCatalog = () => {
  const [limit, setLimit] = useState(21);
  const { data, isLoading, error } = useGetProductsQuery({skip: 0, limit: limit});

  if (isLoading) {
    return <div className="text-center p-8">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Failed to load products.</div>;
  }

  const overalProducts = data?.total ? data?.total : 0;
  const totalPages = Math.ceil(overalProducts/limit);
  console.log({ requestedLimit: limit, responseLimit: data?.limit });
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      <select name="pageLimit" id="pageLimit" onChange={(e) => {setLimit(Number(e.target.value))}}>
        <option value="21" selected>21</option>
        <option value="24">24</option>
        <option value="27">27</option>
        <option value="30">30</option>
      </select>
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