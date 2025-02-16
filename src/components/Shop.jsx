export default function Shop({ children }) {
  return (
    <section className="shop">
      <h2>Products</h2>

      <ul className="products">{children}</ul>
    </section>
  );
}
