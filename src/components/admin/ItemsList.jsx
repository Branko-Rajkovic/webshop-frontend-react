import useFetchData from "../../hooks/useFetchData";

export default function ItemsList() {
  const { data, error } = useFetchData("https://fakestoreapi.com/products/");

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Product List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 gap-4 text-slate-200 md:grid-cols-3">
        {data.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-48 rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <p>{product.rating.rate}</p>
            <p>{product.rating.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
